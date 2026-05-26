import React from 'react';

export interface LanDownloadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownloadThin: React.FC<LanDownloadThinProps>;
export default LanDownloadThin;
