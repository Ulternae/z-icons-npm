import React from 'react';

export interface NeoWifiFairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWifiFair: React.FC<NeoWifiFairProps>;
export default NeoWifiFair;
