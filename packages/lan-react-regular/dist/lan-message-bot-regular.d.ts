import React from 'react';

export interface LanMessageBotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageBotRegular(props: LanMessageBotRegularProps): React.ReactElement;
export default LanMessageBotRegular;
