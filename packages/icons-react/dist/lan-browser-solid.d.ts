import React from 'react';

export interface LanBrowserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrowserSolid: React.FC<LanBrowserSolidProps>;
export default LanBrowserSolid;
