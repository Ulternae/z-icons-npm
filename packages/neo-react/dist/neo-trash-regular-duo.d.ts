import React from 'react';

export interface NeoTrashRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrashRegularDuo(props: NeoTrashRegularDuoProps): React.ReactElement;
export default NeoTrashRegularDuo;
