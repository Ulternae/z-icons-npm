import React from 'react';

export interface NeoTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTag: React.FC<NeoTagProps>;
export default NeoTag;
