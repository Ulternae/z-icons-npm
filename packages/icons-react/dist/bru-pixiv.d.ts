import React from 'react';

export interface BruPixivProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPixiv: React.FC<BruPixivProps>;
export default BruPixiv;
