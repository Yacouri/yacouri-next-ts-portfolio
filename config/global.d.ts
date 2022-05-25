export {};

declare global {
  //  Declare global props for svg icons
  type SvgIconProps = {
    color?: string;
    size?: number | string;
    fill?: string;
    icon: string;
  };
}
