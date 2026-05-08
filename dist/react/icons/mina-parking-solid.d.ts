import React from 'react';

export interface MinaParkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaParkingSolid: React.FC<MinaParkingSolidProps>;
export default MinaParkingSolid;
