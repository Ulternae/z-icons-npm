import React from 'react';

export interface LanBowlScoopsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlScoopsRegular(props: LanBowlScoopsRegularProps): React.ReactElement;
export default LanBowlScoopsRegular;
