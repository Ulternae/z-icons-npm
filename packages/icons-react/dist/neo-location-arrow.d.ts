import React from 'react';

export interface NeoLocationArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLocationArrow: React.FC<NeoLocationArrowProps>;
export default NeoLocationArrow;
