import React from 'react';

export interface LanCircleDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDashedSolid: React.FC<LanCircleDashedSolidProps>;
export default LanCircleDashedSolid;
