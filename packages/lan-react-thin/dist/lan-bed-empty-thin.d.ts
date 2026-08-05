import React from 'react';

export interface LanBedEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedEmptyThin(props: LanBedEmptyThinProps): React.ReactElement;
export default LanBedEmptyThin;
