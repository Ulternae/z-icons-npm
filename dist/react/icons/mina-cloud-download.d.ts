import React from 'react';

export interface MinaCloudDownloadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudDownload: React.FC<MinaCloudDownloadProps>;
export default MinaCloudDownload;
