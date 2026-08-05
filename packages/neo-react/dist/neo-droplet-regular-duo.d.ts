import React from 'react';

export interface NeoDropletRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDropletRegularDuo(props: NeoDropletRegularDuoProps): React.ReactElement;
export default NeoDropletRegularDuo;
