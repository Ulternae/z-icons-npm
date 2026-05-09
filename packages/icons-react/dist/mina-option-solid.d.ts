import React from 'react';

export interface MinaOptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOptionSolid: React.FC<MinaOptionSolidProps>;
export default MinaOptionSolid;
