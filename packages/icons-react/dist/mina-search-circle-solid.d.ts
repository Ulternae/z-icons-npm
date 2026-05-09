import React from 'react';

export interface MinaSearchCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchCircleSolid: React.FC<MinaSearchCircleSolidProps>;
export default MinaSearchCircleSolid;
