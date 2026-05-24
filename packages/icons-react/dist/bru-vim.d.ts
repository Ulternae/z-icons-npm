import React from 'react';

export interface BruVimProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVim: React.FC<BruVimProps>;
export default BruVim;
