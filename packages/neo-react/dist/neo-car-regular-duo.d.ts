import React from 'react';

export interface NeoCarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCarRegularDuo(props: NeoCarRegularDuoProps): React.ReactElement;
export default NeoCarRegularDuo;
