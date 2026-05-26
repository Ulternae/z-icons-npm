import React from 'react';

export interface LanLycheeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLycheeSolid: React.FC<LanLycheeSolidProps>;
export default LanLycheeSolid;
