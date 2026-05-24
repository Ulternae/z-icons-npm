import React from 'react';

export interface BruKeybaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruKeybase: React.FC<BruKeybaseProps>;
export default BruKeybase;
