import React from 'react';

export interface NeoGridRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGridRegularDuo(props: NeoGridRegularDuoProps): React.ReactElement;
export default NeoGridRegularDuo;
