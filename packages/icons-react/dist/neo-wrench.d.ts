import React from 'react';

export interface NeoWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWrench: React.FC<NeoWrenchProps>;
export default NeoWrench;
