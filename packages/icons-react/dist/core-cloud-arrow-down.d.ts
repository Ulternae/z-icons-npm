import React from 'react';

export interface CoreCloudArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudArrowDown: React.FC<CoreCloudArrowDownProps>;
export default CoreCloudArrowDown;
