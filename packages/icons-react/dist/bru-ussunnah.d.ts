import React from 'react';

export interface BruUssunnahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUssunnah: React.FC<BruUssunnahProps>;
export default BruUssunnah;
