import React from 'react';

export interface MinaLayersOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLayersOneSolid: React.FC<MinaLayersOneSolidProps>;
export default MinaLayersOneSolid;
