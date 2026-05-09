import React from 'react';

export interface MinaConfigVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaConfigVerticalSolid: React.FC<MinaConfigVerticalSolidProps>;
export default MinaConfigVerticalSolid;
