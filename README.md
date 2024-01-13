
# Learnable Task on Git and Version Control

## Version Control

Version control is a system that enables the tracking and managing of changes in a source code repository.

## Difference Between Git and GitHub

Git is a distributed version control system used for tracking changes in source code during software development. GitHub, on the other hand, is a web-based platform and service that uses Git for version control. It provides a collaborative environment for software development, allowing developers to work on projects, share code, and manage version history.

The table below provides detailed information about the differences in the features of Git and GitHub

Feature     |       Git     |    GitHub
|   ---     |    ---      |   ---   |
Type        | A distributed open-source Version Control System (VCS)    | A web-based platform and hosting service for Git
Functionality   | Manages version control locally on a machine  | Provides a centralized platform for collaboration
Repositories    | Can exist locally (local repositories)    | Hosted on the GitHub platform (remote repositories)
Collaboration   | Limited to local collaboration    | Enables remote collaboration and social coding
Pull Request    | Not applicable    | Allows users to propose and discuss changes
Branching and Merging   | Supported | Supported, with additional collaboration features such as code review tools, issue tracking and more
Web Interface   | Does not have a web interface | Provides a web-based interface for repository management
Access Control | No built-in access control | Offers fine-grained access control for repositories

## Alternatives to GitHub

- Bitbucket
- GitLab
- SourceForge

## Difference Between `git fetch` and `git pull`

`git fetch` and `git pull` are both Git commands that involve bringing changes from a remote repository to your local one, but they serve different purposes.

Fetching retrieves any new changes from the remote repository to your local repository, but it doesn't automatically merge them into your working branch. After fetching, you need to explicitly merge the fetched changes using `git merge` or inspect them before merging. This allows you to review changes before incorporating them into your working branch.

Pulling, on the other hand, not only fetches the changes from the remote repository but also automatically merges them into your current working branch. It's a more automated command that fetches and merges in one step. This is convenient for scenarios where you want to quickly update your local branch with the changes from the remote.

## The `git rebase` Command

`git rebase` is a Git command that helps you change the way your changes are organized on your branch. It allows you to incorporate the latest changes from another branch (typically the main branch) into your work.

Here's a simple explanation:

Imagine you started working on a feature in your own branch. Meanwhile, other people made changes in the main branch. Instead of having a messy history with lots of "merge commits," `git rebase` allows you to tidy up your changes by putting them on top of the latest changes from the main branch. It's like rearranging your work neatly on a desk after your colleague gives you some updates.
The command to rebase a commit is as follows:

```bash
# Start by switching to your feature branch
git checkout <feature-branch>

# Rebase your changes on top of the latest changes from the main branch
git rebase main
```

## The `git cherry-pick` Command

`git cherry-pick` is a Git command that allows you to take a specific commit from one branch and apply it onto another branch.

Here's a basic explanation:

Imagine you've made some changes in one branch, and you want to bring just one of those changes (a specific commit) into another branch. `git cherry-pick` lets you do exactly that. It allows you to select a commit from one branch and "pick" it onto your current branch.
The command to cherry-pick a commit is as follows:

```bash
# Switch to the branch where you want to apply the commit
git checkout <target-branch>

# Cherry-pick the specific commit from another branch
git cherry-pick <commit-hash>
```

Author: Bright Okon
