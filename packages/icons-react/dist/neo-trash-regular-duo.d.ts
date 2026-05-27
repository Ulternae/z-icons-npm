import React from 'react';

export interface NeoTrashRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrashRegularDuo: React.FC<NeoTrashRegularDuoProps>;
export default NeoTrashRegularDuo;
