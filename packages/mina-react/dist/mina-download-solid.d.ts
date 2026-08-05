import React from 'react';

export interface MinaDownloadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDownloadSolid(props: MinaDownloadSolidProps): React.ReactElement;
export default MinaDownloadSolid;
