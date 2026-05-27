import React from 'react';

export interface CorePersonBikingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePersonBikingSolid: React.FC<CorePersonBikingSolidProps>;
export default CorePersonBikingSolid;
