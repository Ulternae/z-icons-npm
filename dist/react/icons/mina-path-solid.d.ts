import React from 'react';

export interface MinaPathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPathSolid: React.FC<MinaPathSolidProps>;
export default MinaPathSolid;
