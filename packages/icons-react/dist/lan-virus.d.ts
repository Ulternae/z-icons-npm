import React from 'react';

export interface LanVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirus: React.FC<LanVirusProps>;
export default LanVirus;
