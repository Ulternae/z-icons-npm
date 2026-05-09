import React from 'react';

export interface MinaMaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMaleSolid: React.FC<MinaMaleSolidProps>;
export default MinaMaleSolid;
