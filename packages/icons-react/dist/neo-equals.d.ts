import React from 'react';

export interface NeoEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEquals: React.FC<NeoEqualsProps>;
export default NeoEquals;
