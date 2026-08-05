import React from 'react';

export interface LanFishFinsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishFinsThin(props: LanFishFinsThinProps): React.ReactElement;
export default LanFishFinsThin;
