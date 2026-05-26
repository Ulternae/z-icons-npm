import React from 'react';

export interface LanSheepThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSheepThin: React.FC<LanSheepThinProps>;
export default LanSheepThin;
