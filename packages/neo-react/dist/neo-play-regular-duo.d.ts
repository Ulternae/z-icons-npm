import React from 'react';

export interface NeoPlayRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlayRegularDuo(props: NeoPlayRegularDuoProps): React.ReactElement;
export default NeoPlayRegularDuo;
