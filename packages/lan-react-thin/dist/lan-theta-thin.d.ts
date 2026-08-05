import React from 'react';

export interface LanThetaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThetaThin(props: LanThetaThinProps): React.ReactElement;
export default LanThetaThin;
