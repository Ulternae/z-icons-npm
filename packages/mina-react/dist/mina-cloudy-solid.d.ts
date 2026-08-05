import React from 'react';

export interface MinaCloudySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudySolid(props: MinaCloudySolidProps): React.ReactElement;
export default MinaCloudySolid;
