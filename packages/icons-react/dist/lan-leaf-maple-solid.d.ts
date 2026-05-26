import React from 'react';

export interface LanLeafMapleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafMapleSolid: React.FC<LanLeafMapleSolidProps>;
export default LanLeafMapleSolid;
