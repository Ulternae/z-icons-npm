import React from 'react';

export interface MinaAirpodsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAirpods: React.FC<MinaAirpodsProps>;
export default MinaAirpods;
