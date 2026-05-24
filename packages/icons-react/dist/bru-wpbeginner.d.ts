import React from 'react';

export interface BruWpbeginnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWpbeginner: React.FC<BruWpbeginnerProps>;
export default BruWpbeginner;
