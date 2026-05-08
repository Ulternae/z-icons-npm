import React from 'react';

export interface MinaInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoSolid: React.FC<MinaInfoSolidProps>;
export default MinaInfoSolid;
