import React from 'react';

export interface BruResolvingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruResolving: React.FC<BruResolvingProps>;
export default BruResolving;
