import React from 'react';

export interface LanPhoneConnectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneConnection: React.FC<LanPhoneConnectionProps>;
export default LanPhoneConnection;
