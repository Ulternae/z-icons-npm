import React from 'react';

export interface BruCss3AltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCss3Alt: React.FC<BruCss3AltProps>;
export default BruCss3Alt;
