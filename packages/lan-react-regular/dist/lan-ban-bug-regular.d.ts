import React from 'react';

export interface LanBanBugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanBugRegular(props: LanBanBugRegularProps): React.ReactElement;
export default LanBanBugRegular;
