import React from 'react';

export interface LanBanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanThin(props: LanBanThinProps): React.ReactElement;
export default LanBanThin;
