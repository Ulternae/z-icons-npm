import React from 'react';

export interface BruErlangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruErlang: React.FC<BruErlangProps>;
export default BruErlang;
