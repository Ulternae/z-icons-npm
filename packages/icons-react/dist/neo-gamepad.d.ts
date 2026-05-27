import React from 'react';

export interface NeoGamepadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGamepad: React.FC<NeoGamepadProps>;
export default NeoGamepad;
