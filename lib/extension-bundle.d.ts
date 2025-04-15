import { BlockquoteOptions as BlockquoteOptions_2 } from '@tiptap/extension-blockquote';
import { BoldOptions as BoldOptions_2 } from '@tiptap/extension-bold';
import { BulletListOptions as BulletListOptions_2 } from '@tiptap/extension-bullet-list';
import { CharacterCountOptions } from '@tiptap/extension-character-count';
import { CodeOptions as CodeOptions_2 } from '@tiptap/extension-code';
import { ColorOptions as ColorOptions_2 } from '@tiptap/extension-color';
import { default as default_2 } from 'mammoth';
import { DropcursorOptions } from '@tiptap/extension-dropcursor';
import { Editor } from '@tiptap/react';
import { Editor as Editor_2 } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import { Extensions } from '@tiptap/core';
import { FocusOptions as FocusOptions_2 } from '@tiptap/extension-focus';
import { FontFamilyOptions as FontFamilyOptions_2 } from '@tiptap/extension-font-family';
import { HardBreakOptions } from '@tiptap/extension-hard-break';
import { HeadingOptions as HeadingOptions_2 } from '@tiptap/extension-heading';
import { HighlightOptions as HighlightOptions_2 } from '@tiptap/extension-highlight';
import { HistoryOptions as HistoryOptions_2 } from '@tiptap/extension-history';
import { HorizontalRuleOptions as HorizontalRuleOptions_2 } from '@tiptap/extension-horizontal-rule';
import { ImageOptions } from '@tiptap/extension-image';
import { ItalicOptions as ItalicOptions_2 } from '@tiptap/extension-italic';
import { LinkOptions as LinkOptions_2 } from '@tiptap/extension-link';
import { ListItemOptions } from '@tiptap/extension-list-item';
import { Mark } from '@tiptap/core';
import { MentionNodeAttrs } from '@tiptap/extension-mention';
import { MentionOptions } from '@tiptap/extension-mention';
import { Node as Node_2 } from '@tiptap/core';
import { OrderedListOptions as OrderedListOptions_2 } from '@tiptap/extension-ordered-list';
import { ParagraphOptions } from '@tiptap/extension-paragraph';
import { PlaceholderOptions } from '@tiptap/extension-placeholder';
import { Range as Range_2 } from '@tiptap/core';
import { StrikeOptions as StrikeOptions_2 } from '@tiptap/extension-strike';
import { SubscriptExtensionOptions } from '@tiptap/extension-subscript';
import { SuperscriptExtensionOptions } from '@tiptap/extension-superscript';
import { TableCellOptions } from '@tiptap/extension-table-cell';
import { TableHeaderOptions } from '@tiptap/extension-table-header';
import { TableRowOptions } from '@tiptap/extension-table-row';
import { TaskItemOptions } from '@tiptap/extension-task-item';
import { TaskListOptions as TaskListOptions_2 } from '@tiptap/extension-task-list';
import { TextAlignOptions as TextAlignOptions_2 } from '@tiptap/extension-text-align';
import { TextStyleOptions } from '@tiptap/extension-text-style';
import { UnderlineOptions as UnderlineOptions_2 } from '@tiptap/extension-underline';

declare type Alignments = 'left' | 'center' | 'right' | 'justify';

export declare const Attachment: Node_2<AttachmentOptions, any>;

declare interface AttachmentOptions extends GeneralOptions<AttachmentOptions> {
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
}

export declare const BaseKit: Extension<BaseKitOptions, any>;

/**
 * Represents the interface for options in the base toolkit.
 */
export declare interface BaseKitOptions {
    /**
     * Whether to enable the document option
     *
     * @default true
     */
    document: false;
    /**
     * Whether to enable the document option
     *
     * @default false
     */
    multiColumn?: boolean;
    /**
     * Whether to enable the text option
     *
     * @default true
     */
    text: false;
    /**
     * Whether to enable the Gapcursor
     *
     * @default true
     */
    gapcursor: false;
    /**
     * Dropcursor options or false, indicating whether to enable the drop cursor
     *
     * @default true
     */
    dropcursor: Partial<DropcursorOptions> | false;
    /**
     * character count options or false, indicating whether to enable character count
     *
     * @default true
     */
    characterCount: Partial<CharacterCountOptions> | false;
    /**
     * HardBreak options or false, indicating whether to enable hard breaks
     *
     * @default true
     */
    hardBreak: Partial<HardBreakOptions> | false;
    /**
     * Placeholder options or false, indicating whether to enable placeholders
     *
     * @default true
     */
    placeholder: Partial<PlaceholderOptions> | false;
    /**
     * Paragraph options or false, indicating whether to enable paragraph functionality
     *
     * @default true
     */
    paragraph: Partial<ParagraphOptions> | false;
    /**
     * Focus options or false, indicating whether to enable focus functionality
     *
     * @default true
     */
    focus: Partial<FocusOptions_2> | false;
    /**
     * ListItem options or false, indicating whether to enable list item functionality
     *
     * @default true
     */
    listItem: Partial<ListItemOptions> | false;
    /**
     * Text Style options or false, indicating whether to enable text style functionality
     *
     * @default true
     */
    textStyle: Partial<TextStyleOptions> | false;
    /**
     * Bubble options, taking `BubbleOptions<BaseKitOptions>` as parameters, indicating whether to enable the bubble functionality
     */
    bubble: any;
    /**
     * Iframe options or false, indicating whether to enable the iframe
     *
     * @default true
     */
    /**
     * Trailing node options or false, indicating whether to enable the trailing node
     *
     * @default true
     */
    trailingNode: Partial<TrailingNodeOptions> | false;
    /**
     * textBubble options or false, indicating whether to enable the textBubble
     *
     * @default true
     */
    textBubble: Partial<TextBubbleOptions> | false;
    /**
     * selection options or false, indicating whether to enable the selection
     *
     * @default true
     */
    selection: any | false;
}

export declare const Blockquote: Node_2<BlockquoteOptions, any>;

export declare interface BlockquoteOptions extends BlockquoteOptions_2, GeneralOptions<BlockquoteOptions> {
}

export declare const Bold: Mark<BoldOptions, any>;

export declare interface BoldOptions extends BoldOptions_2, GeneralOptions<BoldOptions> {
}

export declare const BulletList: Node_2<BulletListOptions, any>;

export declare interface BulletListOptions extends BulletListOptions_2, GeneralOptions<BulletListOptions> {
}

/**
 * Represents the ButtonView function.
 */
declare type ButtonView<T = any> = (options: ButtonViewParams<T>) => ButtonViewReturn | ButtonViewReturn[];

/**
 * Represents the parameters for the ButtonView function.
 */
declare interface ButtonViewParams<T = any> {
    /** Editor object */
    editor: Editor;
    /** Extension object */
    extension: Extension<T>;
    /** Translation function */
    t: (path: string) => string;
}

/**
 * Represents the return value for the ButtonView component.
 */
declare interface ButtonViewReturn {
    /** Component */
    component: unknown;
    /** Component props */
    componentProps: ButtonViewReturnComponentProps;
    /** Component slots */
    componentSlots?: ButtonViewReturnComponentSlots;
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

/**
 * Represents the slots for the ButtonView component.
 */
declare interface ButtonViewReturnComponentSlots {
    /** Dialog slot */
    dialog: () => any;
    [x: string]: () => any;
}

export declare const Clear: Node_2<ClearOptions, any>;

export declare interface ClearOptions extends GeneralOptions<ClearOptions> {
}

export declare const Code: Mark<CodeOptions, any>;

export declare interface CodeOptions extends CodeOptions_2, GeneralOptions<CodeOptions> {
}

export declare const Color: Extension<ColorOptions, any>;

export declare interface ColorOptions extends ColorOptions_2, GeneralOptions<ColorOptions> {
    /**
     * An array of color options to display in the color picker
     */
    colors?: string[];
    /**
     * The default color to use when no color is selected
     */
    defaultColor?: string;
}

export declare const Column: Node_2<any, any>;

export declare const ColumnActionButton: Extension<any, any>;

declare interface Command {
    name: string;
    label: string;
    description?: string;
    aliases?: string[];
    iconName?: any;
    iconUrl?: string;
    action: ({ editor, range }: {
        editor: Editor_2;
        range: Range_2;
    }) => void;
    shouldBeHidden?: (editor: Editor_2) => boolean;
}

export declare const Drawer: Node_2<DrawerOptions, any>;

declare interface DrawerOptions extends GeneralOptions<DrawerOptions> {
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
}

export declare const Emoji: Node_2<any, any>;

export declare const ExportPdf: Extension<any, any>;

export declare const ExportWord: Extension<ExportWordOptions, any>;

declare interface ExportWordOptions extends GeneralOptions<ExportWordOptions> {
}

export declare const FontFamily: Extension<FontFamilyOptions, any>;

declare interface FontFamilyOptions extends FontFamilyOptions_2, GeneralOptions<FontFamilyOptions> {
    /**
     * Font family list.
     */
    fontFamilyList: (string | NameValueOption)[];
}

export declare const FontSize: Extension<FontSizeOptions, any>;

/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export declare interface FontSizeOptions extends GeneralOptions<FontSizeOptions> {
    types: string[];
    /**
     * List of available font size values
     *
     * @default DEFAULT_FONT_SIZE_LIST
     */
    fontSizes: (string | NameValueOption)[];
}

/**
 * 格式刷
 */
export declare const FormatPainter: Extension<FormatPainterOptions, any>;

/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export declare interface FormatPainterOptions extends GeneralOptions<FormatPainterOptions> {
}

/**
 * Represents the general options for Tiptap extensions.
 */
declare interface GeneralOptions<T> {
    /** Enabled divider */
    divider: boolean;
    /** Enabled spacer */
    spacer: boolean;
    /** Button view function */
    button: ButtonView<T>;
    /** Show on Toolbar */
    toolbar?: boolean;
}

declare interface Group {
    name: string;
    title: string;
    commands: Command[];
}

export declare const Heading: Node_2<HeadingOptions, any>;

export declare interface HeadingOptions extends HeadingOptions_2, GeneralOptions<HeadingOptions> {
}

declare const Highlight_2: Mark<HighlightOptions, any>;
export { Highlight_2 as Highlight }

export declare interface HighlightOptions extends HighlightOptions_2, GeneralOptions<HighlightOptions> {
}

declare const History_2: Extension<HistoryOptions, any>;
export { History_2 as History }

export declare interface HistoryOptions extends HistoryOptions_2, GeneralOptions<HistoryOptions> {
}

export declare const HorizontalRule: Node_2<HorizontalRuleOptions, any>;

export declare interface HorizontalRuleOptions extends HorizontalRuleOptions_2, GeneralOptions<HorizontalRuleOptions> {
}

export declare const Iframe: Node_2<any, any>;

declare interface IImageOptions extends GeneralOptions<IImageOptions> {
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
    HTMLAttributes?: any;
    acceptMimes?: string[];
    maxSize?: number;
    /** The source URL of the image */
    resourceImage: 'upload' | 'link' | 'both';
    defaultInline?: boolean;
}

declare const Image_2: Node_2<IImageOptions, any>;
export { Image_2 as Image }

export declare const ImageGif: Node_2<ImageGifOptions, any>;

declare interface ImageGifOptions extends ImageOptions {
    /**
     * The key for the gif https://giphy.com/
     */
    GIPHY_API_KEY: string;
}

export declare const ImportWord: Extension<ImportWordOptions, any>;

declare interface ImportWordOptions extends GeneralOptions<ImportWordOptions> {
    /** Function for converting Word files to HTML */
    convert?: (file: File) => Promise<string>;
    /** Function for uploading images */
    upload?: (files: File[]) => Promise<unknown>;
    /**
     * File Size limit(10 MB)
     *
     * @default 1024 * 1024 * 10
     */
    limit?: number;
    mammothOptions?: Parameters<typeof default_2['convertToHtml']>[1];
}

export declare const Indent: Extension<IndentOptions, any>;

export declare interface IndentOptions extends GeneralOptions<IndentOptions> {
    types: string[];
    minIndent: number;
    maxIndent: number;
}

export declare const Italic: Mark<ItalicOptions, any>;

export declare interface ItalicOptions extends ItalicOptions_2, GeneralOptions<ItalicOptions> {
}

export declare const LineHeight: Extension<LineHeightOptions, any>;

export declare interface LineHeightOptions extends GeneralOptions<LineHeightOptions> {
    types: string[];
    lineHeights: string[];
    defaultHeight: string;
}

export declare const Link: Mark<LinkOptions, any>;

export declare interface LinkOptions extends LinkOptions_2, GeneralOptions<LinkOptions> {
}

export declare const Mention: Node_2<MentionOptions<any, MentionNodeAttrs>, any>;

export declare const MoreMark: Extension<MoreMarkOptions, any>;

export declare interface MoreMarkOptions extends GeneralOptions<MoreMarkOptions> {
    /**
     * // 下标
     *
     * @default true
     */
    subscript: Partial<SubscriptExtensionOptions> | false;
    /**
     * // 上标
     *
     * @default true
     */
    superscript: Partial<SuperscriptExtensionOptions> | false;
}

export declare const MultiColumn: Node_2<any, any>;

declare interface NameValueOption<T = string> {
    name: string;
    value: T;
}

declare interface Options {
    onHasOneBeforeInsert?: () => void;
}

export declare const OrderedList: Node_2<OrderedListOptions, any>;

export declare interface OrderedListOptions extends OrderedListOptions_2, GeneralOptions<OrderedListOptions> {
}

declare interface Result {
    from: number;
    to: number;
}

export declare const SearchAndReplace: Extension<SearchOptions, SearchStorage>;

declare interface SearchOptions extends GeneralOptions<SearchOptions> {
    searchTerm: string;
    replaceTerm: string;
    searchResultClass: string;
    searchResultCurrentClass: string;
    caseSensitive: boolean;
    disableRegex: boolean;
    onChange?: () => void;
}

declare interface SearchStorage {
    results: Result[];
    currentIndex: number;
}

export declare interface SetImageAttrsOptions {
    src?: string;
    /** The alternative text for the image. */
    alt?: string;
    /** The caption of the image. */
    caption?: string;
    /** The width of the image. */
    width?: number | string | null;
    /** The alignment of the image. */
    align?: 'left' | 'center' | 'right';
    /** Whether the image is inline. */
    inline?: boolean;
    /** image FlipX */
    flipX?: boolean;
    /** image FlipY */
    flipY?: boolean;
}

export declare const SlashCommand: Extension<SlashCommandOptions, any>;

declare interface SlashCommandOptions {
    renderGroupItem?: (extension: Extensions[number], groups: Group[]) => void;
}

export declare const Strike: Mark<StrikeOptions, any>;

export declare interface StrikeOptions extends StrikeOptions_2, GeneralOptions<StrikeOptions> {
}

export declare const SubAndSuperScript: Extension<SubAndSuperScriptOptions, any>;

/**
 * Represents the interface for subscript and superscript options, extending GeneralOptions.
 */
export declare interface SubAndSuperScriptOptions extends GeneralOptions<SubAndSuperScriptOptions> {
    /**
     * subscript options or false, indicating whether subscript is enabled
     *
     * @default true
     */
    subscript: Partial<SubscriptExtensionOptions> | false;
    /**
     * superscript options or false, indicating whether superscript is enabled
     *
     * @default true
     */
    superscript: Partial<SuperscriptExtensionOptions> | false;
}

export declare const Table: Node_2<TableOptions, any>;

declare interface TableCellBackgroundOptions {
    HTMLAttributes: Record<string, any>;
    types?: any;
}

export declare const TableOfContents: Node_2<Options, any>;

export declare interface TableOptions extends GeneralOptions<TableOptions> {
    HTMLAttributes: Record<string, any>;
    resizable: boolean;
    handleWidth: number;
    cellMinWidth: number;
    lastColumnResizable: boolean;
    allowTableNodeSelection: boolean;
    /** options for table rows */
    tableRow: Partial<TableRowOptions>;
    /** options for table headers */
    tableHeader: Partial<TableHeaderOptions>;
    /** options for table cells */
    tableCell: Partial<TableCellOptions>;
    /** options for table cell background */
    tableCellBackground: Partial<TableCellBackgroundOptions>;
}

export declare const TaskList: Node_2<TaskListOptions, any>;

/**
 * Represents the interface for task list options, extending TiptapTaskListOptions and GeneralOptions.
 */
export declare interface TaskListOptions extends TaskListOptions_2, GeneralOptions<TaskListOptions> {
    /** options for task items */
    taskItem: Partial<TaskItemOptions>;
}

export declare const TextAlign: Extension<TextAlignOptions, any>;

/**
 * Represents the interface for text align options, extending TiptapTextAlignOptions and GeneralOptions.
 */
export declare interface TextAlignOptions extends TextAlignOptions_2, GeneralOptions<TextAlignOptions> {
    /**
     * List of available alignment options
     *
     * @default ['left', 'center', 'right', 'justify']
     */
    alignments: Alignments[];
}

declare interface TextBubbleOptions extends GeneralOptions<TextBubbleOptions> {
}

export declare const TextDirection: Extension<any, any>;

/**
 * Extension based on:
 * - https://github.com/ueberdosis/tiptap/blob/v1/packages/tiptap-extensions/src/extensions/TrailingNode.js
 * - https://github.com/remirror/remirror/blob/e0f1bec4a1e8073ce8f5500d62193e52321155b9/packages/prosemirror-trailing-node/src/trailing-node-plugin.ts
 */
declare interface TrailingNodeOptions {
    node: string;
    notAfter: string[];
}

/**
 * This extension adds support for tweets.
 */
export declare const Twitter: Node_2<TwitterOptions, any>;

declare interface TwitterOptions {
    /**
     * Controls if the paste handler for tweets should be added.
     * @default true
     * @example false
     */
    addPasteHandler: boolean;
    HTMLAttributes: Record<string, any>;
    /**
     * Controls if the twitter node should be inline or not.
     * @default false
     * @example true
     */
    inline: boolean;
    /**
     * The origin of the tweet.
     * @default ''
     * @example 'https://tiptap.dev'
     */
    origin: string;
}

export declare const Underline: Mark<UnderlineOptions, any>;

export declare interface UnderlineOptions extends UnderlineOptions_2, GeneralOptions<UnderlineOptions> {
}

export declare const Video: Node_2<VideoOptions, any>;

/**
 * Represents the interface for video options, extending GeneralOptions.
 */
export declare interface VideoOptions extends GeneralOptions<VideoOptions> {
    /**
     * Indicates whether fullscreen play is allowed
     *
     * @default true
     */
    allowFullscreen: boolean;
    /**
     * Indicates whether to display the frameborder
     *
     * @default false
     */
    frameborder: boolean;
    /**
     * Width of the video, can be a number or string
     *
     * @default VIDEO_SIZE['size-medium']
     */
    width: number | string;
    /** HTML attributes object for passing additional attributes */
    HTMLAttributes: {
        [key: string]: any;
    };
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
    /** The source URL of the video */
    resourceVideo: 'upload' | 'link' | 'both';
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
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
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
        drawer: {
            setDrawer: (options: any, replace?: any) => ReturnType;
            setAlignImageDrawer: (align: 'left' | 'center' | 'right') => ReturnType;
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
