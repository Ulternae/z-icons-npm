import React from 'react';

export interface NeoFontRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFontRegularDuo: React.FC<NeoFontRegularDuoProps>;
export default NeoFontRegularDuo;
