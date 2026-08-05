import React from 'react';

export interface NeoSkullRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSkullRegularDuo(props: NeoSkullRegularDuoProps): React.ReactElement;
export default NeoSkullRegularDuo;
