import React from 'react';

export interface LanBroomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroom(props: LanBroomProps): React.ReactElement;
export default LanBroom;
