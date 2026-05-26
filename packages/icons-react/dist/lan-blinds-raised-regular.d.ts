import React from 'react';

export interface LanBlindsRaisedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsRaisedRegular: React.FC<LanBlindsRaisedRegularProps>;
export default LanBlindsRaisedRegular;
