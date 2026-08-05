import React from 'react';

export interface LanCropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrop(props: LanCropProps): React.ReactElement;
export default LanCrop;
