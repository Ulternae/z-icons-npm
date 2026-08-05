import React from 'react';

export interface LanMaskVentilatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskVentilatorSolid(props: LanMaskVentilatorSolidProps): React.ReactElement;
export default LanMaskVentilatorSolid;
