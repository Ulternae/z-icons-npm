import React from 'react';

export interface NeoGaugeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGaugeSolid: React.FC<NeoGaugeSolidProps>;
export default NeoGaugeSolid;
