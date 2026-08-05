import React from 'react';

export interface CoreCloudShowersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudShowersSolid(props: CoreCloudShowersSolidProps): React.ReactElement;
export default CoreCloudShowersSolid;
