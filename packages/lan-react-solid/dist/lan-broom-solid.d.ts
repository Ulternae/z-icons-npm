import React from 'react';

export interface LanBroomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroomSolid(props: LanBroomSolidProps): React.ReactElement;
export default LanBroomSolid;
