import React from 'react';

export interface BruMoneroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMonero: React.FC<BruMoneroProps>;
export default BruMonero;
