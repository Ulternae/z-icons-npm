import React from 'react';

export interface MinaCloudHailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudHailSolid(props: MinaCloudHailSolidProps): React.ReactElement;
export default MinaCloudHailSolid;
