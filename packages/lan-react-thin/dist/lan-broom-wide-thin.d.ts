import React from 'react';

export interface LanBroomWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroomWideThin(props: LanBroomWideThinProps): React.ReactElement;
export default LanBroomWideThin;
