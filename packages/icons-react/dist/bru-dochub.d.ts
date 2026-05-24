import React from 'react';

export interface BruDochubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDochub: React.FC<BruDochubProps>;
export default BruDochub;
