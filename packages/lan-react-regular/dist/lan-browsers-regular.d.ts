import React from 'react';

export interface LanBrowsersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrowsersRegular(props: LanBrowsersRegularProps): React.ReactElement;
export default LanBrowsersRegular;
