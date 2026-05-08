import React from 'react';

export interface MinaDownloadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDownloadSolid: React.FC<MinaDownloadSolidProps>;
export default MinaDownloadSolid;
