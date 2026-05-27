import React from 'react';

export interface NeoCommandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommandSolid: React.FC<NeoCommandSolidProps>;
export default NeoCommandSolid;
