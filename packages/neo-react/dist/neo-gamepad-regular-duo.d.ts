import React from 'react';

export interface NeoGamepadRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGamepadRegularDuo(props: NeoGamepadRegularDuoProps): React.ReactElement;
export default NeoGamepadRegularDuo;
