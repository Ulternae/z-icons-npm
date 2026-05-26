import React from 'react';

export interface LanDiseaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiseaseSolid: React.FC<LanDiseaseSolidProps>;
export default LanDiseaseSolid;
