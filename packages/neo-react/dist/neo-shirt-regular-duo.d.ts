import React from 'react';

export interface NeoShirtRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShirtRegularDuo(props: NeoShirtRegularDuoProps): React.ReactElement;
export default NeoShirtRegularDuo;
