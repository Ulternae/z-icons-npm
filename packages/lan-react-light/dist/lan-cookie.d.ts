import React from 'react';

export interface LanCookieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCookie(props: LanCookieProps): React.ReactElement;
export default LanCookie;
