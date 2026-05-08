import React from 'react';

export interface MinaClipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClipboard: React.FC<MinaClipboardProps>;
export default MinaClipboard;
