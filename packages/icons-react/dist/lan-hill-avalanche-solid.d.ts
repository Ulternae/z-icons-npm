import React from 'react';

export interface LanHillAvalancheSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHillAvalancheSolid: React.FC<LanHillAvalancheSolidProps>;
export default LanHillAvalancheSolid;
