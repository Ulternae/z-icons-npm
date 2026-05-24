import React from 'react';

export interface BruScribdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruScribd: React.FC<BruScribdProps>;
export default BruScribd;
