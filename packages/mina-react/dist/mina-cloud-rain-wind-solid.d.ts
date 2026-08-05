import React from 'react';

export interface MinaCloudRainWindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudRainWindSolid(props: MinaCloudRainWindSolidProps): React.ReactElement;
export default MinaCloudRainWindSolid;
