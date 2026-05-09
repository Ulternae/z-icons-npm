import React from 'react';

export interface MinaBrandTwitchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandTwitch: React.FC<MinaBrandTwitchProps>;
export default MinaBrandTwitch;
