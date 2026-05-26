import React from 'react';

export interface LanShuttersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttersThin: React.FC<LanShuttersThinProps>;
export default LanShuttersThin;
