import React from 'react';

export interface BruVuejsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVuejs: React.FC<BruVuejsProps>;
export default BruVuejs;
