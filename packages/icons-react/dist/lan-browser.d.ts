import React from 'react';

export interface LanBrowserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrowser: React.FC<LanBrowserProps>;
export default LanBrowser;
