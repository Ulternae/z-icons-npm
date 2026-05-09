import React from 'react';

export interface MinaAirplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAirplay: React.FC<MinaAirplayProps>;
export default MinaAirplay;
