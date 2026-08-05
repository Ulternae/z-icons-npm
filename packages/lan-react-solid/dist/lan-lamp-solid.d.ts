import React from 'react';

export interface LanLampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampSolid(props: LanLampSolidProps): React.ReactElement;
export default LanLampSolid;
