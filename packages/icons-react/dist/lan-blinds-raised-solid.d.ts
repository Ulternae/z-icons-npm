import React from 'react';

export interface LanBlindsRaisedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsRaisedSolid: React.FC<LanBlindsRaisedSolidProps>;
export default LanBlindsRaisedSolid;
