import React from 'react';

export interface LanMessageSmsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageSms: React.FC<LanMessageSmsProps>;
export default LanMessageSms;
