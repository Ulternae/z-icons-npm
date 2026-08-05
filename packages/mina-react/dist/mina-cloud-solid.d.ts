import React from 'react';

export interface MinaCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudSolid(props: MinaCloudSolidProps): React.ReactElement;
export default MinaCloudSolid;
