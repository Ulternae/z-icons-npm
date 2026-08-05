import React from 'react';

export interface NeoHourglassRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHourglassRegularDuo(props: NeoHourglassRegularDuoProps): React.ReactElement;
export default NeoHourglassRegularDuo;
