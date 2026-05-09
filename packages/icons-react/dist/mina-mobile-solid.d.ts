import React from 'react';

export interface MinaMobileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMobileSolid: React.FC<MinaMobileSolidProps>;
export default MinaMobileSolid;
