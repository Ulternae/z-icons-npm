import React from 'react';

export interface MinaLayersOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLayersOne: React.FC<MinaLayersOneProps>;
export default MinaLayersOne;
