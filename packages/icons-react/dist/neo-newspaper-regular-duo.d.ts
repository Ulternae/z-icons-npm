import React from 'react';

export interface NeoNewspaperRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoNewspaperRegularDuo: React.FC<NeoNewspaperRegularDuoProps>;
export default NeoNewspaperRegularDuo;
