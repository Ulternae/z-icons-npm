import React from 'react';

export interface LanShieldVirusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldVirusSolid(props: LanShieldVirusSolidProps): React.ReactElement;
export default LanShieldVirusSolid;
