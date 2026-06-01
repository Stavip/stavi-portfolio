import { championProject, CHAMPION_SLUG } from "../ChampionProject.jsx";
import { a1zapProject, A1ZAP_SLUG } from "../A1ZapProject.jsx";
import { breedjProject, BREEDJ_SLUG } from "../BreedjProject.jsx";
import { rallyProject, RALLY_SLUG } from "../RallyProject.jsx";

export const PROJECTS_BY_SLUG = {
  [CHAMPION_SLUG]: championProject,
  [A1ZAP_SLUG]: a1zapProject,
  [BREEDJ_SLUG]: breedjProject,
  [RALLY_SLUG]: rallyProject,
};

export function getProject(slug) {
  return PROJECTS_BY_SLUG[slug] ?? null;
}
