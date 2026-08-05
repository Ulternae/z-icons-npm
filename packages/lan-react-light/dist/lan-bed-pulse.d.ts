import React from 'react';

export interface LanBedPulseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedPulse(props: LanBedPulseProps): React.ReactElement;
export default LanBedPulse;
