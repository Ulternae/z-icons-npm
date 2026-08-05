import React from 'react';

export interface LanBrakeWarningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrakeWarningSolid(props: LanBrakeWarningSolidProps): React.ReactElement;
export default LanBrakeWarningSolid;
