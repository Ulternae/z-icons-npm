import React from 'react';

export interface BruSwiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSwift: React.FC<BruSwiftProps>;
export default BruSwift;
