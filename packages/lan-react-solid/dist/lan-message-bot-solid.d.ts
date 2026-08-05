import React from 'react';

export interface LanMessageBotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageBotSolid(props: LanMessageBotSolidProps): React.ReactElement;
export default LanMessageBotSolid;
