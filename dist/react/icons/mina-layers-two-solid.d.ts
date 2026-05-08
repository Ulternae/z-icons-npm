import React from 'react';

export interface MinaLayersTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLayersTwoSolid: React.FC<MinaLayersTwoSolidProps>;
export default MinaLayersTwoSolid;
