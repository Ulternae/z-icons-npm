import React from 'react';

export interface LanSheepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSheep: React.FC<LanSheepProps>;
export default LanSheep;
