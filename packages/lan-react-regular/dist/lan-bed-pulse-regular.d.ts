import React from 'react';

export interface LanBedPulseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedPulseRegular(props: LanBedPulseRegularProps): React.ReactElement;
export default LanBedPulseRegular;
