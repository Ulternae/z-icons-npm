import React from 'react';

export interface CoreCloudSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudSlashSolid: React.FC<CoreCloudSlashSolidProps>;
export default CoreCloudSlashSolid;
