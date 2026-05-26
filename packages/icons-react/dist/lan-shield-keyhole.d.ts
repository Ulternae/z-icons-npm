import React from 'react';

export interface LanShieldKeyholeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldKeyhole: React.FC<LanShieldKeyholeProps>;
export default LanShieldKeyhole;
