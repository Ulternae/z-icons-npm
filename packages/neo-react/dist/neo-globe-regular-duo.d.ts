import React from 'react';

export interface NeoGlobeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGlobeRegularDuo(props: NeoGlobeRegularDuoProps): React.ReactElement;
export default NeoGlobeRegularDuo;
