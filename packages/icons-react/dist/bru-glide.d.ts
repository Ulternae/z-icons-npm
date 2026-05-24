import React from 'react';

export interface BruGlideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGlide: React.FC<BruGlideProps>;
export default BruGlide;
