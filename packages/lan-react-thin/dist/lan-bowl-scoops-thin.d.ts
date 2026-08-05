import React from 'react';

export interface LanBowlScoopsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlScoopsThin(props: LanBowlScoopsThinProps): React.ReactElement;
export default LanBowlScoopsThin;
