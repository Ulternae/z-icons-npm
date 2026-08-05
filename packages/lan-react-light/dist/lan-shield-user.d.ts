import React from 'react';

export interface LanShieldUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldUser(props: LanShieldUserProps): React.ReactElement;
export default LanShieldUser;
