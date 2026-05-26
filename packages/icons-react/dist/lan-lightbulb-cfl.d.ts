import React from 'react';

export interface LanLightbulbCflProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbCfl: React.FC<LanLightbulbCflProps>;
export default LanLightbulbCfl;
