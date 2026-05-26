import React from 'react';

export interface LanBrowsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrowsers: React.FC<LanBrowsersProps>;
export default LanBrowsers;
