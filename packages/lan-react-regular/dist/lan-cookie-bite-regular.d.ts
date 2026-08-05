import React from 'react';

export interface LanCookieBiteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCookieBiteRegular(props: LanCookieBiteRegularProps): React.ReactElement;
export default LanCookieBiteRegular;
