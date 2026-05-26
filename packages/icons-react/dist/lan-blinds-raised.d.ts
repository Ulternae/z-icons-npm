import React from 'react';

export interface LanBlindsRaisedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsRaised: React.FC<LanBlindsRaisedProps>;
export default LanBlindsRaised;
