import React from 'react';

export interface LanDownloadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownloadThin(props: LanDownloadThinProps): React.ReactElement;
export default LanDownloadThin;
