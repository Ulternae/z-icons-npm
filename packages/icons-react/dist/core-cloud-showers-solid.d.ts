import React from 'react';

export interface CoreCloudShowersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudShowersSolid: React.FC<CoreCloudShowersSolidProps>;
export default CoreCloudShowersSolid;
