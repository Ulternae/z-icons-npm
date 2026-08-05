import React from 'react';

export interface LanSaltShakerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaltShakerRegular(props: LanSaltShakerRegularProps): React.ReactElement;
export default LanSaltShakerRegular;
