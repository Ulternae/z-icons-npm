import React from 'react';

export interface LanCropAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCropAltSolid(props: LanCropAltSolidProps): React.ReactElement;
export default LanCropAltSolid;
