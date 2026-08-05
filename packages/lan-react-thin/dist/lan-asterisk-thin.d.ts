import React from 'react';

export interface LanAsteriskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAsteriskThin(props: LanAsteriskThinProps): React.ReactElement;
export default LanAsteriskThin;
