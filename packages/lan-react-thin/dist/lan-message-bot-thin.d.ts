import React from 'react';

export interface LanMessageBotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageBotThin(props: LanMessageBotThinProps): React.ReactElement;
export default LanMessageBotThin;
