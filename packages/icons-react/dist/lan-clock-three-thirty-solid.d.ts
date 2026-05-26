import React from 'react';

export interface LanClockThreeThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockThreeThirtySolid: React.FC<LanClockThreeThirtySolidProps>;
export default LanClockThreeThirtySolid;
