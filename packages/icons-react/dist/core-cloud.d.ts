import React from 'react';

export interface CoreCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloud: React.FC<CoreCloudProps>;
export default CoreCloud;
