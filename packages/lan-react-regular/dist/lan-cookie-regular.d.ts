import React from 'react';

export interface LanCookieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCookieRegular(props: LanCookieRegularProps): React.ReactElement;
export default LanCookieRegular;
