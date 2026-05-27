import React from 'react';

export interface NeoLeafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLeafSolid: React.FC<NeoLeafSolidProps>;
export default NeoLeafSolid;
