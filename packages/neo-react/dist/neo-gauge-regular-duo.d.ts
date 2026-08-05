import React from 'react';

export interface NeoGaugeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGaugeRegularDuo(props: NeoGaugeRegularDuoProps): React.ReactElement;
export default NeoGaugeRegularDuo;
