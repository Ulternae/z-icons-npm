import React from 'react';

export interface LanBrowserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrowser(props: LanBrowserProps): React.ReactElement;
export default LanBrowser;
