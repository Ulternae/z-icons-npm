import React from 'react';

export interface LanUserAlienThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserAlienThin(props: LanUserAlienThinProps): React.ReactElement;
export default LanUserAlienThin;
