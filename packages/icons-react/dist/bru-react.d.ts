import React from 'react';

export interface BruReactProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruReact: React.FC<BruReactProps>;
export default BruReact;
