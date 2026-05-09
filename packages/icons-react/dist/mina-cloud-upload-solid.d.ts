import React from 'react';

export interface MinaCloudUploadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudUploadSolid: React.FC<MinaCloudUploadSolidProps>;
export default MinaCloudUploadSolid;
