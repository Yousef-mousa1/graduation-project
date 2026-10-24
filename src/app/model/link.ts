export interface NavLink {
  label: string;
  href: string;
}

/** In-page link to a section of the landing page (used with routerLink + fragment). */
export interface SectionLink {
  label: string;
  fragment: string;
}
