import React from 'react';

export interface MinaUploadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUpload: React.FC<MinaUploadProps>;
export default MinaUpload;
