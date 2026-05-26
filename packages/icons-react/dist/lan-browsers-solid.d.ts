import React from 'react';

export interface LanBrowsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrowsersSolid: React.FC<LanBrowsersSolidProps>;
export default LanBrowsersSolid;
