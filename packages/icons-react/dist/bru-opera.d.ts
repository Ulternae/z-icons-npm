import React from 'react';

export interface BruOperaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOpera: React.FC<BruOperaProps>;
export default BruOpera;
