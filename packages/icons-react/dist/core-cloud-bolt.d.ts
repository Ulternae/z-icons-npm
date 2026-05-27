import React from 'react';

export interface CoreCloudBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudBolt: React.FC<CoreCloudBoltProps>;
export default CoreCloudBolt;
