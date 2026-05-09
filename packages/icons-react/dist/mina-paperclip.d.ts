import React from 'react';

export interface MinaPaperclipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPaperclip: React.FC<MinaPaperclipProps>;
export default MinaPaperclip;
