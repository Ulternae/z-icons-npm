import React from 'react';

export interface LanTruckBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckBolt(props: LanTruckBoltProps): React.ReactElement;
export default LanTruckBolt;
