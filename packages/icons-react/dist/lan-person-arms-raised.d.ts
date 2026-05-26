import React from 'react';

export interface LanPersonArmsRaisedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonArmsRaised: React.FC<LanPersonArmsRaisedProps>;
export default LanPersonArmsRaised;
