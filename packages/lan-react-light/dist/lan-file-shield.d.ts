import React from 'react';

export interface LanFileShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileShield(props: LanFileShieldProps): React.ReactElement;
export default LanFileShield;
