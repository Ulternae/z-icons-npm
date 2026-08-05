import React from 'react';

export interface MinaUploadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUpload(props: MinaUploadProps): React.ReactElement;
export default MinaUpload;
