import React from 'react';

export interface CorePaperclipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaperclip: React.FC<CorePaperclipProps>;
export default CorePaperclip;
