import React from 'react';

export interface MinaCloudDownloadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudDownloadSolid(props: MinaCloudDownloadSolidProps): React.ReactElement;
export default MinaCloudDownloadSolid;
