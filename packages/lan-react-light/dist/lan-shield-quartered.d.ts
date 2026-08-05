import React from 'react';

export interface LanShieldQuarteredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldQuartered(props: LanShieldQuarteredProps): React.ReactElement;
export default LanShieldQuartered;
