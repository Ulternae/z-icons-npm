import React from 'react';

export interface NeoGearRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGearRegularDuo(props: NeoGearRegularDuoProps): React.ReactElement;
export default NeoGearRegularDuo;
