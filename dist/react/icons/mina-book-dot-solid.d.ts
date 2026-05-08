import React from 'react';

export interface MinaBookDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookDotSolid: React.FC<MinaBookDotSolidProps>;
export default MinaBookDotSolid;
