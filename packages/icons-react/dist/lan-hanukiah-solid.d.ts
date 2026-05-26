import React from 'react';

export interface LanHanukiahSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHanukiahSolid: React.FC<LanHanukiahSolidProps>;
export default LanHanukiahSolid;
