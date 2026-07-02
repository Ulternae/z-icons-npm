import React from 'react';

export interface CorePaperclipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaperclip(props: CorePaperclipProps): React.ReactElement;
export default CorePaperclip;
