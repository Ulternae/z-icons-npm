import React from 'react';

export interface NeoAtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAt: React.FC<NeoAtProps>;
export default NeoAt;
