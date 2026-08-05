import React from 'react';

export interface LanBicepThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBicepThin(props: LanBicepThinProps): React.ReactElement;
export default LanBicepThin;
