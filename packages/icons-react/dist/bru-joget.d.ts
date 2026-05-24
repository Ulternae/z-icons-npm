import React from 'react';

export interface BruJogetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJoget: React.FC<BruJogetProps>;
export default BruJoget;
