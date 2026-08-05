import React from 'react';

export interface MinaCloudHailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudHail(props: MinaCloudHailProps): React.ReactElement;
export default MinaCloudHail;
