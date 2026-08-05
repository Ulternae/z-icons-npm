import React from 'react';

export interface LanBabyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBabyThin(props: LanBabyThinProps): React.ReactElement;
export default LanBabyThin;
