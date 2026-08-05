import React from 'react';

export interface NeoHandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHandRegularDuo(props: NeoHandRegularDuoProps): React.ReactElement;
export default NeoHandRegularDuo;
