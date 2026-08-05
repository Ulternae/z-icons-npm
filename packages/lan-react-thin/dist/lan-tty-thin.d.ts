import React from 'react';

export interface LanTtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTtyThin(props: LanTtyThinProps): React.ReactElement;
export default LanTtyThin;
