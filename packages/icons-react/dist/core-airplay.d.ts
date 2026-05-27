import React from 'react';

export interface CoreAirplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAirplay: React.FC<CoreAirplayProps>;
export default CoreAirplay;
