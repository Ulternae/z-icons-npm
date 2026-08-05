import React from 'react';

export interface LanCropAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCropAltThin(props: LanCropAltThinProps): React.ReactElement;
export default LanCropAltThin;
