import React from 'react';

export interface NeoStopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStopRegularDuo(props: NeoStopRegularDuoProps): React.ReactElement;
export default NeoStopRegularDuo;
