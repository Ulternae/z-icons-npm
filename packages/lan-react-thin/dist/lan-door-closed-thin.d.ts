import React from 'react';

export interface LanDoorClosedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoorClosedThin(props: LanDoorClosedThinProps): React.ReactElement;
export default LanDoorClosedThin;
