import React from 'react';

export interface NeoGamepadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGamepadSolid(props: NeoGamepadSolidProps): React.ReactElement;
export default NeoGamepadSolid;
