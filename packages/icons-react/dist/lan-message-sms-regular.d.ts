import React from 'react';

export interface LanMessageSmsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageSmsRegular: React.FC<LanMessageSmsRegularProps>;
export default LanMessageSmsRegular;
