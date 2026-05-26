import React from 'react';

export interface LanSquarePesoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePesoRegular: React.FC<LanSquarePesoRegularProps>;
export default LanSquarePesoRegular;
