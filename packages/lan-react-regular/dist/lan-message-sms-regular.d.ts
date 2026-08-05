import React from 'react';

export interface LanMessageSmsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageSmsRegular(props: LanMessageSmsRegularProps): React.ReactElement;
export default LanMessageSmsRegular;
