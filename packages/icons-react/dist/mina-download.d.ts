import React from 'react';

export interface MinaDownloadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDownload: React.FC<MinaDownloadProps>;
export default MinaDownload;
