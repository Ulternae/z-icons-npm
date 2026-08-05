import React from 'react';

export interface LanBroomWideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroomWideRegular(props: LanBroomWideRegularProps): React.ReactElement;
export default LanBroomWideRegular;
