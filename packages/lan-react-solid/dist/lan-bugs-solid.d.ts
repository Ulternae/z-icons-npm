import React from 'react';

export interface LanBugsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugsSolid(props: LanBugsSolidProps): React.ReactElement;
export default LanBugsSolid;
