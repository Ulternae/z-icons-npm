import React from 'react';

export interface LanSignPostsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPostsThin(props: LanSignPostsThinProps): React.ReactElement;
export default LanSignPostsThin;
