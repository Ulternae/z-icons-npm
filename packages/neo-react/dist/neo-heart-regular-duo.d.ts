import React from 'react';

export interface NeoHeartRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHeartRegularDuo(props: NeoHeartRegularDuoProps): React.ReactElement;
export default NeoHeartRegularDuo;
