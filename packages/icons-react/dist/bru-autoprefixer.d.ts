import React from 'react';

export interface BruAutoprefixerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAutoprefixer: React.FC<BruAutoprefixerProps>;
export default BruAutoprefixer;
