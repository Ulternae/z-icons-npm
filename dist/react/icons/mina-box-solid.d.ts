import React from 'react';

export interface MinaBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBoxSolid: React.FC<MinaBoxSolidProps>;
export default MinaBoxSolid;
