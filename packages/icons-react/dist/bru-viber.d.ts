import React from 'react';

export interface BruViberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruViber: React.FC<BruViberProps>;
export default BruViber;
