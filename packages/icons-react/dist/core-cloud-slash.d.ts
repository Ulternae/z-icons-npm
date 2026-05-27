import React from 'react';

export interface CoreCloudSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudSlash: React.FC<CoreCloudSlashProps>;
export default CoreCloudSlash;
