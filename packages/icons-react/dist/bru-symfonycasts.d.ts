import React from 'react';

export interface BruSymfonycastsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSymfonycasts: React.FC<BruSymfonycastsProps>;
export default BruSymfonycasts;
