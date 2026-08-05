import React from 'react';

export interface LanDoorClosedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoorClosedSolid(props: LanDoorClosedSolidProps): React.ReactElement;
export default LanDoorClosedSolid;
