import React from 'react';

export interface BruW3cProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruW3c: React.FC<BruW3cProps>;
export default BruW3c;
