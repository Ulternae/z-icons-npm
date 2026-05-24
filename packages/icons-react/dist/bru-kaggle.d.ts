import React from 'react';

export interface BruKaggleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruKaggle: React.FC<BruKaggleProps>;
export default BruKaggle;
