import React from 'react';

export interface MinaBabySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBabySolid: React.FC<MinaBabySolidProps>;
export default MinaBabySolid;
