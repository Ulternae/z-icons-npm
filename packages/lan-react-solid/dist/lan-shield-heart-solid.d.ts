import React from 'react';

export interface LanShieldHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldHeartSolid(props: LanShieldHeartSolidProps): React.ReactElement;
export default LanShieldHeartSolid;
