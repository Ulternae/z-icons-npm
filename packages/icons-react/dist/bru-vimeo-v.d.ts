import React from 'react';

export interface BruVimeoVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVimeoV: React.FC<BruVimeoVProps>;
export default BruVimeoV;
