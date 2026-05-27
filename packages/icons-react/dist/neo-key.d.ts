import React from 'react';

export interface NeoKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoKey: React.FC<NeoKeyProps>;
export default NeoKey;
