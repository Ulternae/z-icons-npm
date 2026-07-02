import React from 'react';

export interface CoreCloudBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudBolt(props: CoreCloudBoltProps): React.ReactElement;
export default CoreCloudBolt;
