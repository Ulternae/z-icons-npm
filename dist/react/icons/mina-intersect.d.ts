import React from 'react';

export interface MinaIntersectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIntersect: React.FC<MinaIntersectProps>;
export default MinaIntersect;
