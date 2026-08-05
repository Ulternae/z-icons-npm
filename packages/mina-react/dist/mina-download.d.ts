import React from 'react';

export interface MinaDownloadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDownload(props: MinaDownloadProps): React.ReactElement;
export default MinaDownload;
