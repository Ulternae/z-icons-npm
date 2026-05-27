import React from 'react';

export interface CoreCloudShowersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudShowers: React.FC<CoreCloudShowersProps>;
export default CoreCloudShowers;
