import React from 'react';

export interface MinaBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookOpenSolid: React.FC<MinaBookOpenSolidProps>;
export default MinaBookOpenSolid;
