import React from 'react';

export interface NeoSkullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSkull: React.FC<NeoSkullProps>;
export default NeoSkull;
