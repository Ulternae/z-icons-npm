import React from 'react';

export interface MinaLayersThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLayersThree: React.FC<MinaLayersThreeProps>;
export default MinaLayersThree;
