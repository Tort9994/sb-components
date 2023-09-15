import "./MyLabel.css";
export interface Props {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label Size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * label color
    */
    color?: "text-primary" | "text-secondary" | "text-tertiary";
    /**
   *Capitalize all letters
   */
    allCaps?: boolean;
    /**
   *Font Color
   */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: Props) => import("react/jsx-runtime").JSX.Element;
