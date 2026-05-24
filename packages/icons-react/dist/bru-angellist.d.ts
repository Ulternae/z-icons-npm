import React from 'react';

export interface BruAngellistProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAngellist: React.FC<BruAngellistProps>;
export default BruAngellist;
