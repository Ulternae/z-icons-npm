import React from 'react';

export interface LanBottleBabyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleBabyThin(props: LanBottleBabyThinProps): React.ReactElement;
export default LanBottleBabyThin;
