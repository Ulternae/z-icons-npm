import React from 'react';

export interface MinaInfinitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfinitySolid: React.FC<MinaInfinitySolidProps>;
export default MinaInfinitySolid;
