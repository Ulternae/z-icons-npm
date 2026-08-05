import React from 'react';

export interface NeoVideoRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVideoRegularDuo(props: NeoVideoRegularDuoProps): React.ReactElement;
export default NeoVideoRegularDuo;
