import React from 'react';

export interface LanMessageBotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageBotThin: React.FC<LanMessageBotThinProps>;
export default LanMessageBotThin;
