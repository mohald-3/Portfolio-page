# Mohanned | Senior Backend Engineer Portfolio

A dark, modern, and serious developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Deployment Fix (GitHub Pages)

If you previously saw a blank page, it's because GitHub Pages cannot run `.tsx` files directly. I have added a **GitHub Actions** workflow to solve this.

### 🛠️ How to make it live:
1. **Push to Main**: Ensure all files (including the new `.github` folder) are pushed to your `main` branch.
2. **Action Runs**: GitHub will automatically start a "Workflow" (check the **Actions** tab in your repo). It will build the site and create a new branch called `gh-pages`.
3. **Switch Pages Source**:
   - Go to **Settings** > **Pages**.
   - Under "Build and deployment", change the branch from `main` to **`gh-pages`**.
   - Click **Save**.

Within a minute, your portfolio will be live at your GitHub Pages URL!

---

## 📂 Project Structure
- `data/`: Manage your bio and projects here.
- `components/`: UI building blocks.
- `vite.config.ts`: Build configuration.
- `.github/workflows/`: Automation for deployment.

---

## 📝 License
MIT License.