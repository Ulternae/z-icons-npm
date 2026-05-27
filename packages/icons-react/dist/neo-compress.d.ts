import React from 'react';

export interface NeoCompressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCompress: React.FC<NeoCompressProps>;
export default NeoCompress;
