import React from 'react';

export interface MinaUploadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUploadSolid(props: MinaUploadSolidProps): React.ReactElement;
export default MinaUploadSolid;
