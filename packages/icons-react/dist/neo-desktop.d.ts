import React from 'react';

export interface NeoDesktopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDesktop: React.FC<NeoDesktopProps>;
export default NeoDesktop;
