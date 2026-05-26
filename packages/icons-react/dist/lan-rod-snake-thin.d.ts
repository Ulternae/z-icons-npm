import React from 'react';

export interface LanRodSnakeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRodSnakeThin: React.FC<LanRodSnakeThinProps>;
export default LanRodSnakeThin;
