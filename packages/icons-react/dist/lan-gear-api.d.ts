import React from 'react';

export interface LanGearApiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearApi: React.FC<LanGearApiProps>;
export default LanGearApi;
