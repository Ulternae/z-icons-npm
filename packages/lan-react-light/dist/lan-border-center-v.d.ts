import React from 'react';

export interface LanBorderCenterVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderCenterV(props: LanBorderCenterVProps): React.ReactElement;
export default LanBorderCenterV;
