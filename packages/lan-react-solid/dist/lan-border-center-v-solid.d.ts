import React from 'react';

export interface LanBorderCenterVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderCenterVSolid(props: LanBorderCenterVSolidProps): React.ReactElement;
export default LanBorderCenterVSolid;
