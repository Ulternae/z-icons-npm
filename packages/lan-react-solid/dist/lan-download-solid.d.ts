import React from 'react';

export interface LanDownloadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownloadSolid(props: LanDownloadSolidProps): React.ReactElement;
export default LanDownloadSolid;
