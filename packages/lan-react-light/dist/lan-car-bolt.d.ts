import React from 'react';

export interface LanCarBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBolt(props: LanCarBoltProps): React.ReactElement;
export default LanCarBolt;
