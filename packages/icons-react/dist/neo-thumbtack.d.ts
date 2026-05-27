import React from 'react';

export interface NeoThumbtackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoThumbtack: React.FC<NeoThumbtackProps>;
export default NeoThumbtack;
