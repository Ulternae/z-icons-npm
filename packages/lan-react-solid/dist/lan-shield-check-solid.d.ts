import React from 'react';

export interface LanShieldCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCheckSolid(props: LanShieldCheckSolidProps): React.ReactElement;
export default LanShieldCheckSolid;
