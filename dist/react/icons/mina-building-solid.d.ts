import React from 'react';

export interface MinaBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBuildingSolid: React.FC<MinaBuildingSolidProps>;
export default MinaBuildingSolid;
