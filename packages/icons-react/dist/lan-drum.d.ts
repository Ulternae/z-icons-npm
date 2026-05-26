import React from 'react';

export interface LanDrumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrum: React.FC<LanDrumProps>;
export default LanDrum;
