import React from 'react';

export interface LanUploadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUploadRegular(props: LanUploadRegularProps): React.ReactElement;
export default LanUploadRegular;
