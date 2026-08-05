import React from 'react';

export interface LanBroomWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroomWideSolid(props: LanBroomWideSolidProps): React.ReactElement;
export default LanBroomWideSolid;
