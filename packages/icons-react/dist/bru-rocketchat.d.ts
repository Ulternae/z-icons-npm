import React from 'react';

export interface BruRocketchatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRocketchat: React.FC<BruRocketchatProps>;
export default BruRocketchat;
