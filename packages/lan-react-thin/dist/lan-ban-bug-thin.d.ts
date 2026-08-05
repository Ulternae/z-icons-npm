import React from 'react';

export interface LanBanBugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanBugThin(props: LanBanBugThinProps): React.ReactElement;
export default LanBanBugThin;
