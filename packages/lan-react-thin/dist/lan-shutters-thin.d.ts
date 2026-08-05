import React from 'react';

export interface LanShuttersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttersThin(props: LanShuttersThinProps): React.ReactElement;
export default LanShuttersThin;
