import React from 'react';

export interface MinaBathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBath: React.FC<MinaBathProps>;
export default MinaBath;
