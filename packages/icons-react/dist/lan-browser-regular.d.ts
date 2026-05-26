import React from 'react';

export interface LanBrowserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrowserRegular: React.FC<LanBrowserRegularProps>;
export default LanBrowserRegular;
