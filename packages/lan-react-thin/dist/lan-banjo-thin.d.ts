import React from 'react';

export interface LanBanjoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanjoThin(props: LanBanjoThinProps): React.ReactElement;
export default LanBanjoThin;
