import React from 'react';

export interface LanShieldMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldMinusSolid: React.FC<LanShieldMinusSolidProps>;
export default LanShieldMinusSolid;
