import React from 'react';

export interface LanMeterBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterBoltThin(props: LanMeterBoltThinProps): React.ReactElement;
export default LanMeterBoltThin;
