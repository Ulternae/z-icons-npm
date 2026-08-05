import React from 'react';

export interface NeoListRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoListRegularDuo(props: NeoListRegularDuoProps): React.ReactElement;
export default NeoListRegularDuo;
