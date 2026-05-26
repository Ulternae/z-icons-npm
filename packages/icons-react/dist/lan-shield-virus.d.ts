import React from 'react';

export interface LanShieldVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldVirus: React.FC<LanShieldVirusProps>;
export default LanShieldVirus;
