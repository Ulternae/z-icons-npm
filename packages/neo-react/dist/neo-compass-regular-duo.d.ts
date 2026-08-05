import React from 'react';

export interface NeoCompassRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCompassRegularDuo(props: NeoCompassRegularDuoProps): React.ReactElement;
export default NeoCompassRegularDuo;
