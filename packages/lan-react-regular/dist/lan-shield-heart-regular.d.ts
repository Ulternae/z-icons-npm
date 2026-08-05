import React from 'react';

export interface LanShieldHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldHeartRegular(props: LanShieldHeartRegularProps): React.ReactElement;
export default LanShieldHeartRegular;
