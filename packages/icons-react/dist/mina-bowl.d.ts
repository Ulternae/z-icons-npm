import React from 'react';

export interface MinaBowlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBowl: React.FC<MinaBowlProps>;
export default MinaBowl;
