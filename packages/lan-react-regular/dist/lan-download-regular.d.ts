import React from 'react';

export interface LanDownloadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownloadRegular(props: LanDownloadRegularProps): React.ReactElement;
export default LanDownloadRegular;
