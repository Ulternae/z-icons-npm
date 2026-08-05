import React from 'react';

export interface LanUserBeardBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserBeardBolt(props: LanUserBeardBoltProps): React.ReactElement;
export default LanUserBeardBolt;
