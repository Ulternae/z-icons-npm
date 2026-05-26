import React from 'react';

export interface LanGearComplexApiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplexApi: React.FC<LanGearComplexApiProps>;
export default LanGearComplexApi;
