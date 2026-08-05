import React from 'react';

export interface LanSaltShakerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaltShakerThin(props: LanSaltShakerThinProps): React.ReactElement;
export default LanSaltShakerThin;
