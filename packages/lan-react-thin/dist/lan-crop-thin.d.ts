import React from 'react';

export interface LanCropThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCropThin(props: LanCropThinProps): React.ReactElement;
export default LanCropThin;
