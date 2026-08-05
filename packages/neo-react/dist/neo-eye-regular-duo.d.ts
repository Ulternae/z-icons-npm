import React from 'react';

export interface NeoEyeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEyeRegularDuo(props: NeoEyeRegularDuoProps): React.ReactElement;
export default NeoEyeRegularDuo;
