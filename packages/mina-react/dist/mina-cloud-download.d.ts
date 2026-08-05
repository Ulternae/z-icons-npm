import React from 'react';

export interface MinaCloudDownloadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudDownload(props: MinaCloudDownloadProps): React.ReactElement;
export default MinaCloudDownload;
