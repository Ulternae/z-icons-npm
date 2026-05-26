import React from 'react';

export interface LanDownloadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownload: React.FC<LanDownloadProps>;
export default LanDownload;
