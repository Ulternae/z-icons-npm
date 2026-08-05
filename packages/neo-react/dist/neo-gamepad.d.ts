import React from 'react';

export interface NeoGamepadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGamepad(props: NeoGamepadProps): React.ReactElement;
export default NeoGamepad;
