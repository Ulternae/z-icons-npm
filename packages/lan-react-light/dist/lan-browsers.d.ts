import React from 'react';

export interface LanBrowsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrowsers(props: LanBrowsersProps): React.ReactElement;
export default LanBrowsers;
