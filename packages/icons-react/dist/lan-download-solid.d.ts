import React from 'react';

export interface LanDownloadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownloadSolid: React.FC<LanDownloadSolidProps>;
export default LanDownloadSolid;
