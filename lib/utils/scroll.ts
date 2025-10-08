// src/lib/utils/scroll.ts

/**
 * 平滑滚动到某个锚点元素（id）
 * @param id 元素 id
 * @param offset 额外偏移（例如固定导航高度），默认 80
 */
export function smoothScrollToId(id: string, offset = 80) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const absoluteY = window.pageYOffset + rect.top - offset;

  window.scrollTo({
    top: absoluteY,
    behavior: "smooth",
  });
}

/**
 * 监听滚动并返回当前处于视窗的 section id
 * 用于顶部导航高亮
 */
export function getActiveSectionId(sectionIds: string[], threshold = 0.5) {
  let current: string | null = null;
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    const r = el.getBoundingClientRect();
    const visibleHeight = Math.min(window.innerHeight, Math.max(0, window.innerHeight - Math.max(0, r.top))) - Math.max(0, r.bottom - window.innerHeight);
    const ratio = Math.max(0, visibleHeight) / Math.max(1, r.height);
    if (ratio >= threshold) {
      current = id;
      break;
    }
  }
  return current;
}
