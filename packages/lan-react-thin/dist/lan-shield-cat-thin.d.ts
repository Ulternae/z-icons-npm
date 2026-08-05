import React from 'react';

export interface LanShieldCatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCatThin(props: LanShieldCatThinProps): React.ReactElement;
export default LanShieldCatThin;
