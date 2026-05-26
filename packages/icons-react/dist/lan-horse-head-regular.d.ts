import React from 'react';

export interface LanHorseHeadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseHeadRegular: React.FC<LanHorseHeadRegularProps>;
export default LanHorseHeadRegular;
