import React from 'react';

export interface MinaCloudUploadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudUpload: React.FC<MinaCloudUploadProps>;
export default MinaCloudUpload;
