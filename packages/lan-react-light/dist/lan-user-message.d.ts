import React from 'react';

export interface LanUserMessageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMessage(props: LanUserMessageProps): React.ReactElement;
export default LanUserMessage;
