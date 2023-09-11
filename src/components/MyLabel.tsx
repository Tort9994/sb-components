import "./MyLabel.css"



interface Props {
    /**
     * Text to display
     */
    label: string
    /**
     * Label Size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3'
    /**
    * label color
    */
    color?: "text-primary" | "text-secondary" | "text-tertiary"
    /**
   *Capitalize all letters
   */
    allCaps?: boolean
    /**
   *Font Color
   */
    fontColor?: string
}

export const MyLabel = ({
    label,
    size = 'h1',
    color = "text-primary",
    allCaps = false,
    fontColor
}: Props) => {


    return (
        <span className={`${size} ${color} label`} style={{ color: fontColor }}   >{allCaps ? label.toUpperCase() : label}</span>
    )
}
