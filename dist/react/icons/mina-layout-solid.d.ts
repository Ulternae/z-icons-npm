import React from 'react';

export interface MinaLayoutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLayoutSolid: React.FC<MinaLayoutSolidProps>;
export default MinaLayoutSolid;
