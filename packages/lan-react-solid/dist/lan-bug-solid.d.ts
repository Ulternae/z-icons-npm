import React from 'react';

export interface LanBugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugSolid(props: LanBugSolidProps): React.ReactElement;
export default LanBugSolid;
