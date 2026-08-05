import React from 'react';

export interface LanBrowserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrowserRegular(props: LanBrowserRegularProps): React.ReactElement;
export default LanBrowserRegular;
