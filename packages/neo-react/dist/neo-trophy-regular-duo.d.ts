import React from 'react';

export interface NeoTrophyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrophyRegularDuo(props: NeoTrophyRegularDuoProps): React.ReactElement;
export default NeoTrophyRegularDuo;
