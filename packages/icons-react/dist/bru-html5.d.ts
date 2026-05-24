import React from 'react';

export interface BruHtml5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHtml5: React.FC<BruHtml5Props>;
export default BruHtml5;
