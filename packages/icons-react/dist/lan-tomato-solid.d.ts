import React from 'react';

export interface LanTomatoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTomatoSolid: React.FC<LanTomatoSolidProps>;
export default LanTomatoSolid;
