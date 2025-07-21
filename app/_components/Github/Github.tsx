'use client'
import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'Abhishekjohn1507';
const REPO_COUNT = 9;

interface Repo {
  name: string;
  html_url: string;
  description: string;
  commits_url: string;
}

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
      name: string;
    };
  };
  html_url: string;
}

const Github = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [commits, setCommits] = useState<Record<string, Commit | null>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchReposAndCommits() {
      setLoading(true);
      setError('');
      try {
        const repoRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPO_COUNT}`);
        if (!repoRes.ok) throw new Error('Failed to fetch repos');
        const repoData: Repo[] = await repoRes.json();
        setRepos(repoData);
        const commitPromises = repoData.map(async (repo) => {
          const commitsRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`);
          if (!commitsRes.ok) return null;
          const commitsData: Commit[] = await commitsRes.json();
          return commitsData[0] || null;
        });
        const commitsArr = await Promise.all(commitPromises);
        const commitsObj: Record<string, Commit | null> = {};
        repoData.forEach((repo, idx) => {
          commitsObj[repo.name] = commitsArr[idx];
        });
        setCommits(commitsObj);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Error fetching GitHub data');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchReposAndCommits();
  }, []);

  return (
    <section id="github" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-2 text-center flex items-center justify-center gap-2">
          <svg width="28" height="28" fill="currentColor" className="text-gray-800 dark:text-gray-100 mr-2" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          GitHub Repositories & Latest Commits
        </h2>
        <p className="mb-8 text-md text-gray-500 text-center max-w-2xl mx-auto">
          A showcase of my latest repositories and their most recent commits. Click on a repository or commit to view more on GitHub.
        </p>
        {loading && <div className="text-center text-lg">Loading...</div>}
        {error && <div className="text-red-500 text-center">{error}</div>}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="group border rounded-xl p-5 bg-white dark:bg-zinc-900 shadow transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg flex flex-col justify-between min-h-[220px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">
                  {repo.name}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-gray-500 hover:text-purple-700 dark:hover:text-purple-300"
                  title="View on GitHub"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3v2h3.59L7 15.59 8.41 17 19 6.41V10h2V3z"/><path d="M5 5v14h14v-7h-2v5H7V7h5V5H5z"/></svg>
                </a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 min-h-[40px]">{repo.description || <span className="italic text-gray-400">No description</span>}</p>
              {commits[repo.name] ? (
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                    <svg width="16" height="16" fill="currentColor" className="text-green-500" viewBox="0 0 24 24"><path d="M17 16l4-4-4-4v3H3v2h14v3z"/></svg>
                    Latest commit:
                  </div>
                  <a
                    href={commits[repo.name]?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-800 dark:text-gray-100 hover:underline font-medium mb-1"
                  >
                    <blockquote className="border-l-4 border-purple-400 pl-3 italic text-gray-700 dark:text-gray-200">
                      {commits[repo.name]?.commit.message}
                    </blockquote>
                  </a>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <span className="font-mono bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                      {commits[repo.name]?.sha.substring(0, 7)}
                    </span>
                    <span>by {commits[repo.name]?.commit.author.name}</span>
                    <span>on {new Date(commits[repo.name]?.commit.author.date || '').toLocaleDateString()}</span>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-gray-400 mt-auto">No commits found.</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Github;