import React from 'react';

export interface CoreSlidersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSlidersSolid: React.FC<CoreSlidersSolidProps>;
export default CoreSlidersSolid;
