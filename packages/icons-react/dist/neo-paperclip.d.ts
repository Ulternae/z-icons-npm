import React from 'react';

export interface NeoPaperclipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaperclip: React.FC<NeoPaperclipProps>;
export default NeoPaperclip;
