import React from 'react';

export interface MinaCloudUploadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudUpload(props: MinaCloudUploadProps): React.ReactElement;
export default MinaCloudUpload;
