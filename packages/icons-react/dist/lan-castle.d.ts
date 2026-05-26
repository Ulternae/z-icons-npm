import React from 'react';

export interface LanCastleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCastle: React.FC<LanCastleProps>;
export default LanCastle;
