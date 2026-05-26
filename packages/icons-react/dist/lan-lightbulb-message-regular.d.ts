import React from 'react';

export interface LanLightbulbMessageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbMessageRegular: React.FC<LanLightbulbMessageRegularProps>;
export default LanLightbulbMessageRegular;
