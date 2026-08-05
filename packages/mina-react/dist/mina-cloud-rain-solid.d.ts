import React from 'react';

export interface MinaCloudRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudRainSolid(props: MinaCloudRainSolidProps): React.ReactElement;
export default MinaCloudRainSolid;
