import React from 'react';

export interface NeoClockRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoClockRegularDuo(props: NeoClockRegularDuoProps): React.ReactElement;
export default NeoClockRegularDuo;
