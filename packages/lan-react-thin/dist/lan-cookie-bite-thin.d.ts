import React from 'react';

export interface LanCookieBiteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCookieBiteThin(props: LanCookieBiteThinProps): React.ReactElement;
export default LanCookieBiteThin;
