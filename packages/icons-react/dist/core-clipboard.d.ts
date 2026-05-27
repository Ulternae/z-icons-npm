import React from 'react';

export interface CoreClipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClipboard: React.FC<CoreClipboardProps>;
export default CoreClipboard;
