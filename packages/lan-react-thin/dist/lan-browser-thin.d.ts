import React from 'react';

export interface LanBrowserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrowserThin(props: LanBrowserThinProps): React.ReactElement;
export default LanBrowserThin;
