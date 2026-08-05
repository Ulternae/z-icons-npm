import React from 'react';

export interface LanBedBunkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedBunk(props: LanBedBunkProps): React.ReactElement;
export default LanBedBunk;
