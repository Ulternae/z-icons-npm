import React from 'react';

export interface MinaFlowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlowerSolid: React.FC<MinaFlowerSolidProps>;
export default MinaFlowerSolid;
