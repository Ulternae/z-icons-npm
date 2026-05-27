import React from 'react';

export interface NeoFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFlagSolid: React.FC<NeoFlagSolidProps>;
export default NeoFlagSolid;
