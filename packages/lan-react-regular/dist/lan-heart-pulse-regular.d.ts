import React from 'react';

export interface LanHeartPulseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartPulseRegular(props: LanHeartPulseRegularProps): React.ReactElement;
export default LanHeartPulseRegular;
