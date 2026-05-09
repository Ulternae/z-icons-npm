import React from 'react';

export interface MinaBinocularsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBinocularsSolid: React.FC<MinaBinocularsSolidProps>;
export default MinaBinocularsSolid;
