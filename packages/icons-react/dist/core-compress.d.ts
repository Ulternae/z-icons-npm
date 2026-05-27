import React from 'react';

export interface CoreCompressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCompress: React.FC<CoreCompressProps>;
export default CoreCompress;
