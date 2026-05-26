import React from 'react';

export interface LanHeadSideVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideVirus: React.FC<LanHeadSideVirusProps>;
export default LanHeadSideVirus;
