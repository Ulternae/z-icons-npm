import React from 'react';

export interface MinaShareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShareSolid: React.FC<MinaShareSolidProps>;
export default MinaShareSolid;
