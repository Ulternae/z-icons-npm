import React from 'react';

export interface LanHeartRateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartRateRegular(props: LanHeartRateRegularProps): React.ReactElement;
export default LanHeartRateRegular;
