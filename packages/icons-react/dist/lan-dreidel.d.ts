import React from 'react';

export interface LanDreidelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDreidel: React.FC<LanDreidelProps>;
export default LanDreidel;
