import React from 'react';

export interface LanBanBugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanBug(props: LanBanBugProps): React.ReactElement;
export default LanBanBug;
