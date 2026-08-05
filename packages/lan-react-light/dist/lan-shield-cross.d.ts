import React from 'react';

export interface LanShieldCrossProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCross(props: LanShieldCrossProps): React.ReactElement;
export default LanShieldCross;
