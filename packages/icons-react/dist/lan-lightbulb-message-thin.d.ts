import React from 'react';

export interface LanLightbulbMessageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbMessageThin: React.FC<LanLightbulbMessageThinProps>;
export default LanLightbulbMessageThin;
