import React from 'react';

export interface NeoPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPauseSolid: React.FC<NeoPauseSolidProps>;
export default NeoPauseSolid;
