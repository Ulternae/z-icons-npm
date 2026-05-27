import React from 'react';

export interface NeoUniversalAccessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUniversalAccess: React.FC<NeoUniversalAccessProps>;
export default NeoUniversalAccess;
