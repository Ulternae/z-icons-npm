import React from 'react';

export interface BruForgejoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruForgejo: React.FC<BruForgejoProps>;
export default BruForgejo;
