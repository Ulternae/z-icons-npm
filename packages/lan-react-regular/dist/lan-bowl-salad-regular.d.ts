import React from 'react';

export interface LanBowlSaladRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSaladRegular(props: LanBowlSaladRegularProps): React.ReactElement;
export default LanBowlSaladRegular;
