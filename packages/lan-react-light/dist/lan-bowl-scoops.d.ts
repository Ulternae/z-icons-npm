import React from 'react';

export interface LanBowlScoopsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlScoops(props: LanBowlScoopsProps): React.ReactElement;
export default LanBowlScoops;
