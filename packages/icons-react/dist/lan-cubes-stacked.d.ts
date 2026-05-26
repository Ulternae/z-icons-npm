import React from 'react';

export interface LanCubesStackedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubesStacked: React.FC<LanCubesStackedProps>;
export default LanCubesStacked;
