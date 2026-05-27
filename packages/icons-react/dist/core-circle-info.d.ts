import React from 'react';

export interface CoreCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleInfo: React.FC<CoreCircleInfoProps>;
export default CoreCircleInfo;
