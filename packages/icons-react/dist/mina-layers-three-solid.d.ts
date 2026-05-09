import React from 'react';

export interface MinaLayersThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLayersThreeSolid: React.FC<MinaLayersThreeSolidProps>;
export default MinaLayersThreeSolid;
