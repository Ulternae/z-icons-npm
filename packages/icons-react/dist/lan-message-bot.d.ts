import React from 'react';

export interface LanMessageBotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageBot: React.FC<LanMessageBotProps>;
export default LanMessageBot;
