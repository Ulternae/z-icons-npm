import React from 'react';

export interface NeoThumbsDownRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoThumbsDownRegularDuo: React.FC<NeoThumbsDownRegularDuoProps>;
export default NeoThumbsDownRegularDuo;
