import React from 'react';

export interface LanBrowsersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrowsersRegular: React.FC<LanBrowsersRegularProps>;
export default LanBrowsersRegular;
