import React from 'react';

export interface NeoPlaneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlaneRegularDuo(props: NeoPlaneRegularDuoProps): React.ReactElement;
export default NeoPlaneRegularDuo;
