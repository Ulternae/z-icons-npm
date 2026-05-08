import React from 'react';

export interface MinaBellXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellXSolid: React.FC<MinaBellXSolidProps>;
export default MinaBellXSolid;
