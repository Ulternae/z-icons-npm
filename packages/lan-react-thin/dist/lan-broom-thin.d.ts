import React from 'react';

export interface LanBroomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroomThin(props: LanBroomThinProps): React.ReactElement;
export default LanBroomThin;
