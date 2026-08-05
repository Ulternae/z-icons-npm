import React from 'react';

export interface LanBorderCenterHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderCenterH(props: LanBorderCenterHProps): React.ReactElement;
export default LanBorderCenterH;
