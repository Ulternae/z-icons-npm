import React from 'react';

export interface LanBroomWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroomWide(props: LanBroomWideProps): React.ReactElement;
export default LanBroomWide;
