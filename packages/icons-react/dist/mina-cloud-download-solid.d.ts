import React from 'react';

export interface MinaCloudDownloadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudDownloadSolid: React.FC<MinaCloudDownloadSolidProps>;
export default MinaCloudDownloadSolid;
