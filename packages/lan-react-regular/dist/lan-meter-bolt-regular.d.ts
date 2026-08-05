import React from 'react';

export interface LanMeterBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterBoltRegular(props: LanMeterBoltRegularProps): React.ReactElement;
export default LanMeterBoltRegular;
