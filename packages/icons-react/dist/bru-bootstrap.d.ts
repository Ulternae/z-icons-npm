import React from 'react';

export interface BruBootstrapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBootstrap: React.FC<BruBootstrapProps>;
export default BruBootstrap;
