import React from 'react';

export interface LanBedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBed(props: LanBedProps): React.ReactElement;
export default LanBed;
