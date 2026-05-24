import React from 'react';

export interface BruLeetcodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLeetcode: React.FC<BruLeetcodeProps>;
export default BruLeetcode;
