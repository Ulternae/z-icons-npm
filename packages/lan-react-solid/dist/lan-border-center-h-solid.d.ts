import React from 'react';

export interface LanBorderCenterHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderCenterHSolid(props: LanBorderCenterHSolidProps): React.ReactElement;
export default LanBorderCenterHSolid;
