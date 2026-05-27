import React from 'react';

export interface NeoThumbsUpRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoThumbsUpRegularDuo: React.FC<NeoThumbsUpRegularDuoProps>;
export default NeoThumbsUpRegularDuo;
