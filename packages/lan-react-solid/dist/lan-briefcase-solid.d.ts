import React from 'react';

export interface LanBriefcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefcaseSolid(props: LanBriefcaseSolidProps): React.ReactElement;
export default LanBriefcaseSolid;
