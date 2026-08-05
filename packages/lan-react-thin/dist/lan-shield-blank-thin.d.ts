import React from 'react';

export interface LanShieldBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldBlankThin(props: LanShieldBlankThinProps): React.ReactElement;
export default LanShieldBlankThin;
