import React from 'react';

export interface LanCropSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCropSolid(props: LanCropSolidProps): React.ReactElement;
export default LanCropSolid;
