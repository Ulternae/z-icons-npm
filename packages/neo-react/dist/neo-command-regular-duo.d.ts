import React from 'react';

export interface NeoCommandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCommandRegularDuo(props: NeoCommandRegularDuoProps): React.ReactElement;
export default NeoCommandRegularDuo;
