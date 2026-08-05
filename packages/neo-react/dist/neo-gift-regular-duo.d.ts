import React from 'react';

export interface NeoGiftRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGiftRegularDuo(props: NeoGiftRegularDuoProps): React.ReactElement;
export default NeoGiftRegularDuo;
