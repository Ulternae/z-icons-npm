import React from 'react';

export interface NeoSlidersRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSlidersRegularDuo(props: NeoSlidersRegularDuoProps): React.ReactElement;
export default NeoSlidersRegularDuo;
