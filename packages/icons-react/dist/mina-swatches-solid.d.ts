import React from 'react';

export interface MinaSwatchesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSwatchesSolid: React.FC<MinaSwatchesSolidProps>;
export default MinaSwatchesSolid;
