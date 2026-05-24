import React from 'react';

export interface BruJediOrderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJediOrder: React.FC<BruJediOrderProps>;
export default BruJediOrder;
