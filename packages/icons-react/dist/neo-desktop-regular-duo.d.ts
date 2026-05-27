import React from 'react';

export interface NeoDesktopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDesktopRegularDuo: React.FC<NeoDesktopRegularDuoProps>;
export default NeoDesktopRegularDuo;
