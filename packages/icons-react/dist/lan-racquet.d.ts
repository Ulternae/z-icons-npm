import React from 'react';

export interface LanRacquetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRacquet: React.FC<LanRacquetProps>;
export default LanRacquet;
