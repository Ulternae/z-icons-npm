import React from 'react';

export interface LanMeterFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterFireRegular(props: LanMeterFireRegularProps): React.ReactElement;
export default LanMeterFireRegular;
