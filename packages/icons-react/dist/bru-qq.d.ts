import React from 'react';

export interface BruQqProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruQq: React.FC<BruQqProps>;
export default BruQq;
