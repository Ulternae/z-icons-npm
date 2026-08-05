import React from 'react';

export interface LanUploadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUploadSolid(props: LanUploadSolidProps): React.ReactElement;
export default LanUploadSolid;
