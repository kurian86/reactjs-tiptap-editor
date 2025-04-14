import { AnyExtension } from '@tiptap/core';
import { BubbleMenu } from '@tiptap/react';
import { default as default_2 } from 'react';
import { Editor } from '@tiptap/react';
import { Editor as Editor_2 } from '@tiptap/core';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { TooltipContentProps } from '@radix-ui/react-tooltip';
import { UseEditorOptions } from '@tiptap/react';

declare interface ActionButtonProps {
    icon?: string;
    title?: string;
    tooltip?: string;
    disabled?: boolean;
    shortcutKeys?: string[];
    customClass?: string;
    loading?: boolean;
    tooltipOptions?: TooltipContentProps;
    color?: string;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    children?: default_2.ReactNode;
    asChild?: boolean;
    upload?: boolean;
}

export { BubbleMenu }

declare interface BubbleMenuConfig {
    /**
     * @description Column menu hidden
     * @default false
     */
    hidden?: boolean;
    /**
     * custom menu actions
     */
    actions?: ActionButtonProps[];
}

/**
 * Represents the BubbleMenuProps.
 */
declare interface BubbleMenuProps {
    columnConfig?: {
        /**
         * @description Column menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    tableConfig?: BubbleMenuConfig;
    floatingMenuConfig?: {
        /**
         * @description Floating menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    linkConfig?: {
        /**
         * @description Link menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    textConfig?: {
        /**
         * @description Text menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    imageConfig?: {
        /**
         * @description Image menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    imageGifConfig?: {
        /**
         * @description Image menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    videoConfig?: {
        /**
         * @description Video menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    katexConfig?: {
        /**
         * @description katex menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    excalidrawConfig?: {
        /**
         * @description excalidraw menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    iframeConfig?: {
        /**
         * @description iframe menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    mermaidConfig?: {
        /**
         * @description mermaid menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    twitterConfig?: {
        /**
         * @description twitter menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    drawerConfig?: {
        /**
         * @description twitter menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    render?: (props: BubbleMenuRenderProps, dom: React.ReactNode) => React.ReactNode;
}

/**
 * Represents the BubbleMenuRenderProps.
 */
declare interface BubbleMenuRenderProps {
    editor: Editor;
    disabled: boolean;
    bubbleMenu: BubbleMenuProps;
}

/**
 * Represents the props for the ButtonView component.
 */
declare interface ButtonViewReturnComponentProps {
    /** Method triggered when action is performed */
    action?: (value?: any) => void;
    /** Whether it is in the active state */
    isActive?: () => boolean;
    /** Button icon */
    icon?: any;
    /** Text displayed on hover */
    tooltip?: string;
    [x: string]: any;
}

declare const _default: ForwardRefExoticComponent<RichTextEditorProps & RefAttributes<    {
editor: Editor_2 | null;
}>>;
export default _default;

export { Editor }

/**
 * Interface for RichTextEditor component props
 */
declare interface RichTextEditorProps {
    /** Content of the editor */
    content: string;
    /** Extensions for the editor */
    extensions: AnyExtension[];
    /** Output format */
    output: 'html' | 'json' | 'text';
    /** Model value */
    modelValue?: string | object;
    /** Dark mode flag */
    dark?: boolean;
    /** Dense mode flag */
    dense?: boolean;
    /** Disabled flag */
    disabled?: boolean;
    /** Label for the editor */
    label?: string;
    /** Hide toolbar flag */
    hideToolbar?: boolean;
    /** Disable bubble menu flag */
    disableBubble?: boolean;
    /** Hide bubble menu flag */
    hideBubble?: boolean;
    /** Remove default wrapper flag */
    removeDefaultWrapper?: boolean;
    /** Maximum width */
    maxWidth?: string | number;
    /** Minimum height */
    minHeight?: string | number;
    /** Maximum height */
    maxHeight?: string | number;
    /** Content class */
    contentClass?: string | string[] | Record<string, any>;
    /** Content change callback */
    onChangeContent?: (val: any) => void;
    /** Bubble menu props */
    bubbleMenu?: BubbleMenuProps;
    /** Toolbar props */
    toolbar?: ToolbarProps;
    /** Use editor options */
    useEditorOptions?: UseEditorOptions;
    /** Use editor options */
    resetCSS?: boolean;
}

/**
 * Represents the ToolbarItemProps.
 */
declare interface ToolbarItemProps {
    button: {
        component: React.ComponentType<any>;
        componentProps: Record<string, any>;
    };
    divider: boolean;
    spacer: boolean;
    type: string;
    name: string;
}

declare interface ToolbarProps {
    render?: (props: ToolbarRenderProps, toolbarItems: ToolbarItemProps[], dom: any[], containerDom: (innerContent: React.ReactNode) => React.ReactNode) => React.ReactNode;
}

declare interface ToolbarRenderProps {
    editor: Editor;
    disabled: boolean;
}

export { UseEditorOptions }

export declare function useEditorState(): UseEditorStateReturn;

export declare interface UseEditorStateReturn {
    isReady: boolean;
    editor: Editor_2 | null;
    editorRef: React.MutableRefObject<{
        editor: Editor_2 | null;
    }>;
}

export { }


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        video: {
            /**
             * Add an video
             */
            setVideo: (options: Partial<SetVideoOptions>) => ReturnType;
            /**
             * Update an video
             */
            updateVideo: (options: Partial<SetVideoOptions>) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        setCodeBlock: {
            setCodeBlock: (options?: any) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the text font size. ex: "12px", "2em", or "small". Must be a valid
             * CSS font-size
             * (https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        indent: {
            /**
             * Set the indent attribute
             */
            indent: () => ReturnType;
            /**
             * Set the outdent attribute
             */
            outdent: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageUpload: {
            /**
             * Add an image
             */
            setImageInline: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image
             */
            updateImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Set image alignment
             */
            setAlignImage: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableCellBackground: {
            setTableCellBackground: (color: string) => ReturnType;
            unsetTableCellBackground: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            /**
             * Add an iframe
             */
            setIframe: (options: {
                src: string;
                service: string;
            }) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        painter: {
            setPainter: (marks: Mark[]) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        columns: {
            insertColumns: (attrs?: {
                cols: number;
            }) => ReturnType;
            addColBefore: () => ReturnType;
            addColAfter: () => ReturnType;
            deleteCol: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        search: {
            setSearchTerm: (searchTerm: string) => ReturnType;
            setReplaceTerm: (replaceTerm: string) => ReturnType;
            replace: () => ReturnType;
            replaceAll: () => ReturnType;
            goToPrevSearchResult: () => void;
            goToNextSearchResult: () => void;
            setCaseSensitive: (caseSensitive: boolean) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emoji: {
            setEmoji: (emoji: {
                name: string;
                emoji: string;
            }) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        katex: {
            setKatex: (arg?: IKatexAttrs) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        exportWord: {
            exportToWord: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableOfContents: {
            setTableOfContents: () => ReturnType;
            removeTableOfContents: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        attachment: {
            setAttachment: (attrs?: unknown) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageGifUpload: {
            /**
             * Add an image gif
             */
            setImageGif: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image gif
             */
            updateImageGif: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Set image alignment
             */
            setAlignImageGif: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mermaid: {
            setMermaid: (options: any, replace?: any) => ReturnType;
            setAlignImageMermaid: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        twitter: {
            /**
             * Insert a tweet
             * @param options The tweet attributes
             * @example editor.commands.setTweet({ src: 'https://x.com/seanpk/status/1800145949580517852' })
             */
            setTweet: (options: SetTweetOptions) => ReturnType;
            updateTweet: (options: SetTweetOptions) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        drawer: {
            setDrawer: (options: any, replace?: any) => ReturnType;
            setAlignImageDrawer: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        excalidraw: {
            setExcalidraw: (attrs?: IExcalidrawAttrs) => ReturnType;
        };
    }
}
