import React from 'react';

export interface LanClipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboard: React.FC<LanClipboardProps>;
export default LanClipboard;
