import React from 'react';

export interface BruSymfonyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSymfony: React.FC<BruSymfonyProps>;
export default BruSymfony;
