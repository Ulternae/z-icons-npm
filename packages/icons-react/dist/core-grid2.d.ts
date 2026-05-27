import React from 'react';

export interface CoreGrid2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGrid2: React.FC<CoreGrid2Props>;
export default CoreGrid2;
