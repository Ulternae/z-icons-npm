import React from 'react';

export interface LanItalicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanItalicThin: React.FC<LanItalicThinProps>;
export default LanItalicThin;
