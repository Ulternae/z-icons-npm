import React from 'react';

export interface LanDownloadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownload(props: LanDownloadProps): React.ReactElement;
export default LanDownload;
