import React from 'react';

export interface LanMeterBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterBolt(props: LanMeterBoltProps): React.ReactElement;
export default LanMeterBolt;
