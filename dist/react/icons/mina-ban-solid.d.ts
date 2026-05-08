import React from 'react';

export interface MinaBanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBanSolid: React.FC<MinaBanSolidProps>;
export default MinaBanSolid;
