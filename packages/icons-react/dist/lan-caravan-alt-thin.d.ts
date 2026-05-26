import React from 'react';

export interface LanCaravanAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaravanAltThin: React.FC<LanCaravanAltThinProps>;
export default LanCaravanAltThin;
