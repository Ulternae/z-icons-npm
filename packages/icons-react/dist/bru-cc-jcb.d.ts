import React from 'react';

export interface BruCcJcbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcJcb: React.FC<BruCcJcbProps>;
export default BruCcJcb;
