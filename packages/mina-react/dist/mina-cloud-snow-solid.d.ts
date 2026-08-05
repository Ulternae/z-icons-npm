import React from 'react';

export interface MinaCloudSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudSnowSolid(props: MinaCloudSnowSolidProps): React.ReactElement;
export default MinaCloudSnowSolid;
