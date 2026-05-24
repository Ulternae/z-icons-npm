import React from 'react';

export interface BruRustProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRust: React.FC<BruRustProps>;
export default BruRust;
