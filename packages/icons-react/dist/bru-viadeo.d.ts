import React from 'react';

export interface BruViadeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruViadeo: React.FC<BruViadeoProps>;
export default BruViadeo;
