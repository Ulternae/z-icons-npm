import React from 'react';

export interface LanShieldQuarteredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldQuarteredThin(props: LanShieldQuarteredThinProps): React.ReactElement;
export default LanShieldQuarteredThin;
