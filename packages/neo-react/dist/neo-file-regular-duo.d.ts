import React from 'react';

export interface NeoFileRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFileRegularDuo(props: NeoFileRegularDuoProps): React.ReactElement;
export default NeoFileRegularDuo;
