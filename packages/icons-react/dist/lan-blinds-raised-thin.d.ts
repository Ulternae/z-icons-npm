import React from 'react';

export interface LanBlindsRaisedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsRaisedThin: React.FC<LanBlindsRaisedThinProps>;
export default LanBlindsRaisedThin;
