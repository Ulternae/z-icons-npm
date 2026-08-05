import React from 'react';

export interface LanBroomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroomRegular(props: LanBroomRegularProps): React.ReactElement;
export default LanBroomRegular;
