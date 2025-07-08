export type ActivePage = "inventory" | "onSale" | "sold";


export interface NavbarProps {
  activePage: ActivePage;
}