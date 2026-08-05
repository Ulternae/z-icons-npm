import React from 'react';

export interface LanUploadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpload(props: LanUploadProps): React.ReactElement;
export default LanUpload;
