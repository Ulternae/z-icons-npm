import React from 'react';

export interface LanBriefsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefsSolid(props: LanBriefsSolidProps): React.ReactElement;
export default LanBriefsSolid;
