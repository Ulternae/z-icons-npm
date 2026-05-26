import React from 'react';

export interface LanPoliceBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoliceBoxThin: React.FC<LanPoliceBoxThinProps>;
export default LanPoliceBoxThin;
