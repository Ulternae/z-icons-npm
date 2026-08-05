import React from 'react';

export interface LanBorderCenterVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderCenterVThin(props: LanBorderCenterVThinProps): React.ReactElement;
export default LanBorderCenterVThin;
