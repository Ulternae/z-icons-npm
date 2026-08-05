import React from 'react';

export interface LanCropAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCropAltRegular(props: LanCropAltRegularProps): React.ReactElement;
export default LanCropAltRegular;
