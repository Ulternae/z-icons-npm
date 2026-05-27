import React from 'react';

export interface NeoGamepadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGamepadSolid: React.FC<NeoGamepadSolidProps>;
export default NeoGamepadSolid;
