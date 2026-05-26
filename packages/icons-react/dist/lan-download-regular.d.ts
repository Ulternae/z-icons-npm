import React from 'react';

export interface LanDownloadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownloadRegular: React.FC<LanDownloadRegularProps>;
export default LanDownloadRegular;
