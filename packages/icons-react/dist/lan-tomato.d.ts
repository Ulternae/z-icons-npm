import React from 'react';

export interface LanTomatoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTomato: React.FC<LanTomatoProps>;
export default LanTomato;
