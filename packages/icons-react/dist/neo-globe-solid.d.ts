import React from 'react';

export interface NeoGlobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGlobeSolid: React.FC<NeoGlobeSolidProps>;
export default NeoGlobeSolid;
