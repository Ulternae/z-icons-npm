import React from 'react';

export interface LanUserMessageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMessageThin(props: LanUserMessageThinProps): React.ReactElement;
export default LanUserMessageThin;
