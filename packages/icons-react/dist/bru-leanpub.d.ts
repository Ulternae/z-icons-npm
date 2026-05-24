import React from 'react';

export interface BruLeanpubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLeanpub: React.FC<BruLeanpubProps>;
export default BruLeanpub;
