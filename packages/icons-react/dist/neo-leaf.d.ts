import React from 'react';

export interface NeoLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLeaf: React.FC<NeoLeafProps>;
export default NeoLeaf;
