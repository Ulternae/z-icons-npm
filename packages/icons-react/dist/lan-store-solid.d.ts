import React from 'react';

export interface LanStoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreSolid: React.FC<LanStoreSolidProps>;
export default LanStoreSolid;
