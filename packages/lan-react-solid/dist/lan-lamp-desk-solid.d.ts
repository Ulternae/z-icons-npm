import React from 'react';

export interface LanLampDeskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampDeskSolid(props: LanLampDeskSolidProps): React.ReactElement;
export default LanLampDeskSolid;
