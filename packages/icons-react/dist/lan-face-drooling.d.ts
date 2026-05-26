import React from 'react';

export interface LanFaceDroolingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDrooling: React.FC<LanFaceDroolingProps>;
export default LanFaceDrooling;
