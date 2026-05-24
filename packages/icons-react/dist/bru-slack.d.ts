import React from 'react';

export interface BruSlackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSlack: React.FC<BruSlackProps>;
export default BruSlack;
