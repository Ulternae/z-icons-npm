import React from 'react';

export interface NeoListOlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoListOl: React.FC<NeoListOlProps>;
export default NeoListOl;
