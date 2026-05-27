import React from 'react';

export interface NeoSlidersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSlidersSolid: React.FC<NeoSlidersSolidProps>;
export default NeoSlidersSolid;
