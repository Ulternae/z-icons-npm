import React from 'react';

export interface LanMeterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterRegular(props: LanMeterRegularProps): React.ReactElement;
export default LanMeterRegular;
