import React from 'react';

export interface LanBedEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedEmptySolid(props: LanBedEmptySolidProps): React.ReactElement;
export default LanBedEmptySolid;
