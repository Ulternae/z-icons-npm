import React from 'react';

export interface NeoFishRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFishRegularDuo(props: NeoFishRegularDuoProps): React.ReactElement;
export default NeoFishRegularDuo;
