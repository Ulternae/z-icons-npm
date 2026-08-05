import React from 'react';

export interface LanShieldAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldAltThin(props: LanShieldAltThinProps): React.ReactElement;
export default LanShieldAltThin;
