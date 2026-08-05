import React from 'react';

export interface LanHeartPulseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartPulse(props: LanHeartPulseProps): React.ReactElement;
export default LanHeartPulse;
