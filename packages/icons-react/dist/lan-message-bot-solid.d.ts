import React from 'react';

export interface LanMessageBotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageBotSolid: React.FC<LanMessageBotSolidProps>;
export default LanMessageBotSolid;
