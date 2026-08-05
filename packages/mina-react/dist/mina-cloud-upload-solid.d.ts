import React from 'react';

export interface MinaCloudUploadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudUploadSolid(props: MinaCloudUploadSolidProps): React.ReactElement;
export default MinaCloudUploadSolid;
