import React from 'react';

export interface LanUploadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUploadThin(props: LanUploadThinProps): React.ReactElement;
export default LanUploadThin;
