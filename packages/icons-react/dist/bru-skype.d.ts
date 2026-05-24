import React from 'react';

export interface BruSkypeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSkype: React.FC<BruSkypeProps>;
export default BruSkype;
