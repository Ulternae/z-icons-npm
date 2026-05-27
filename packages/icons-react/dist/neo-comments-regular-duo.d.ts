import React from 'react';

export interface NeoCommentsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommentsRegularDuo: React.FC<NeoCommentsRegularDuoProps>;
export default NeoCommentsRegularDuo;
