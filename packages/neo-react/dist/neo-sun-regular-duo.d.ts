import React from 'react';

export interface NeoSunRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSunRegularDuo(props: NeoSunRegularDuoProps): React.ReactElement;
export default NeoSunRegularDuo;
