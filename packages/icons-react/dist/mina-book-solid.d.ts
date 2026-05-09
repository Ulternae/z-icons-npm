import React from 'react';

export interface MinaBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookSolid: React.FC<MinaBookSolidProps>;
export default MinaBookSolid;
