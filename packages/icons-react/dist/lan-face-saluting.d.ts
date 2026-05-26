import React from 'react';

export interface LanFaceSalutingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSaluting: React.FC<LanFaceSalutingProps>;
export default LanFaceSaluting;
