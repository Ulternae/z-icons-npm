import React from 'react';

export interface BruGgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGg: React.FC<BruGgProps>;
export default BruGg;
