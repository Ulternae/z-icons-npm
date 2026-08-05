import React from 'react';

export interface LanBedAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedAlt(props: LanBedAltProps): React.ReactElement;
export default LanBedAlt;
