import React from 'react';

export interface LanLampDeskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampDeskSolid: React.FC<LanLampDeskSolidProps>;
export default LanLampDeskSolid;
