import React from 'react';

export interface CoreCloudBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudBoltSolid(props: CoreCloudBoltSolidProps): React.ReactElement;
export default CoreCloudBoltSolid;
