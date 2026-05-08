import React from 'react';

export interface MinaBrandGooglePlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandGooglePlay: React.FC<MinaBrandGooglePlayProps>;
export default MinaBrandGooglePlay;
