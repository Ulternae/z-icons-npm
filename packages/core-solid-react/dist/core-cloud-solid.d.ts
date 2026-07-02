import React from 'react';

export interface CoreCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudSolid(props: CoreCloudSolidProps): React.ReactElement;
export default CoreCloudSolid;
