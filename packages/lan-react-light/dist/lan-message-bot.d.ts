import React from 'react';

export interface LanMessageBotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageBot(props: LanMessageBotProps): React.ReactElement;
export default LanMessageBot;
