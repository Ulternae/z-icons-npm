import React from 'react';

export interface LanHillAvalancheProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHillAvalanche: React.FC<LanHillAvalancheProps>;
export default LanHillAvalanche;
