import React from 'react';

export interface NeoListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoListSolid: React.FC<NeoListSolidProps>;
export default NeoListSolid;
