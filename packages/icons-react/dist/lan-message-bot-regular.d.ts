import React from 'react';

export interface LanMessageBotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageBotRegular: React.FC<LanMessageBotRegularProps>;
export default LanMessageBotRegular;
