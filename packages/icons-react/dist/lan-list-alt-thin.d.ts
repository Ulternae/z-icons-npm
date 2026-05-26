import React from 'react';

export interface LanListAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListAltThin: React.FC<LanListAltThinProps>;
export default LanListAltThin;
