import React from 'react';

export interface MinaCloudHailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudHail: React.FC<MinaCloudHailProps>;
export default MinaCloudHail;
