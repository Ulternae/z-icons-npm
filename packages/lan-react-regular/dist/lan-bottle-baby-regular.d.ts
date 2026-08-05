import React from 'react';

export interface LanBottleBabyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleBabyRegular(props: LanBottleBabyRegularProps): React.ReactElement;
export default LanBottleBabyRegular;
