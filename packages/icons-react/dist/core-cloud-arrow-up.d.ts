import React from 'react';

export interface CoreCloudArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudArrowUp: React.FC<CoreCloudArrowUpProps>;
export default CoreCloudArrowUp;
