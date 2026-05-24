import React from 'react';

export interface BruTwitchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTwitch: React.FC<BruTwitchProps>;
export default BruTwitch;
