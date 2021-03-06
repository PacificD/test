/*
 * @Author: Pacific_D
 * @Date: 2022-04-26 16:33:12
 * @LastEditTime: 2022-07-13 16:18:53
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \react-demo\src\hooks\useImageOnLoad.ts
 */
import { CSSProperties, useState } from "react"

interface ImageStyle {
    thumbnail: CSSProperties
    fullSize: CSSProperties
}

interface ImageOnLoadType {
    handleImageOnLoad: () => void
    css: ImageStyle
}

function useImageOnLoad(): ImageOnLoadType {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    // Triggered when full image will be loaded.
    const handleImageOnLoad = () => {
        setIsLoaded(true)
    }

    const css: ImageStyle = {
        // Thumbnail style.
        thumbnail: {
            visibility: isLoaded ? "hidden" : "visible",
            filter: "blur(8px)",
            transition: "visibility 0ms ease-out 1500ms"
        },
        // Full image style.
        fullSize: {
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1500ms ease-in 0ms"
        }
    }

    return { handleImageOnLoad, css }
}

export default useImageOnLoad
