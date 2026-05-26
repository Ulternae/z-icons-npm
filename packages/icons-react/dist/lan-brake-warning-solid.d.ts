import React from 'react';

export interface LanBrakeWarningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrakeWarningSolid: React.FC<LanBrakeWarningSolidProps>;
export default LanBrakeWarningSolid;
