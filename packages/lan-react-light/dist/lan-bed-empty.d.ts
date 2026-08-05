import React from 'react';

export interface LanBedEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedEmpty(props: LanBedEmptyProps): React.ReactElement;
export default LanBedEmpty;
