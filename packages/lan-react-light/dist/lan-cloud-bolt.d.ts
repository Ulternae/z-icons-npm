import React from 'react';

export interface LanCloudBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBolt(props: LanCloudBoltProps): React.ReactElement;
export default LanCloudBolt;
