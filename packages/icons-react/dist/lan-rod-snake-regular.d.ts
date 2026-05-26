import React from 'react';

export interface LanRodSnakeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRodSnakeRegular: React.FC<LanRodSnakeRegularProps>;
export default LanRodSnakeRegular;
