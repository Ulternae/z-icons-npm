import React from 'react';

export interface LanDragonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDragon: React.FC<LanDragonProps>;
export default LanDragon;
