import React from 'react';

export interface NeoCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCirclePlus: React.FC<NeoCirclePlusProps>;
export default NeoCirclePlus;
