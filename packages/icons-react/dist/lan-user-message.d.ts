import React from 'react';

export interface LanUserMessageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMessage: React.FC<LanUserMessageProps>;
export default LanUserMessage;
