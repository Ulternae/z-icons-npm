import React from 'react';

export interface NeoBookRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBookRegularDuo(props: NeoBookRegularDuoProps): React.ReactElement;
export default NeoBookRegularDuo;
