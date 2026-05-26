import React from 'react';

export interface LanBoxesAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxesAltThin: React.FC<LanBoxesAltThinProps>;
export default LanBoxesAltThin;
