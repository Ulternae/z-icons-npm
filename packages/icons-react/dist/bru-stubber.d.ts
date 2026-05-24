import React from 'react';

export interface BruStubberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStubber: React.FC<BruStubberProps>;
export default BruStubber;
