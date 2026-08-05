import React from 'react';

export interface LanCropRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCropRegular(props: LanCropRegularProps): React.ReactElement;
export default LanCropRegular;
