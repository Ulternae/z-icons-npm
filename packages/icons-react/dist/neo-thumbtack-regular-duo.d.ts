import React from 'react';

export interface NeoThumbtackRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoThumbtackRegularDuo: React.FC<NeoThumbtackRegularDuoProps>;
export default NeoThumbtackRegularDuo;
