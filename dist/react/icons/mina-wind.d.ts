import React from 'react';

export interface MinaWindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWind: React.FC<MinaWindProps>;
export default MinaWind;
