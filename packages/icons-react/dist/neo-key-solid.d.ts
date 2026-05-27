import React from 'react';

export interface NeoKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoKeySolid: React.FC<NeoKeySolidProps>;
export default NeoKeySolid;
