import React from 'react';

export interface LanLightbulbMessageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbMessage: React.FC<LanLightbulbMessageProps>;
export default LanLightbulbMessage;
