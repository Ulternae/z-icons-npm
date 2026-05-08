import React from 'react';

export interface MinaBrandPocketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandPocket: React.FC<MinaBrandPocketProps>;
export default MinaBrandPocket;
