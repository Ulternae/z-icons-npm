import React from 'react';

export interface NeoStarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStarRegularDuo(props: NeoStarRegularDuoProps): React.ReactElement;
export default NeoStarRegularDuo;
