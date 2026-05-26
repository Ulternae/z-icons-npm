import React from 'react';

export interface LanLungsVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLungsVirus: React.FC<LanLungsVirusProps>;
export default LanLungsVirus;
