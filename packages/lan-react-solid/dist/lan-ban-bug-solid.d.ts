import React from 'react';

export interface LanBanBugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanBugSolid(props: LanBanBugSolidProps): React.ReactElement;
export default LanBanBugSolid;
