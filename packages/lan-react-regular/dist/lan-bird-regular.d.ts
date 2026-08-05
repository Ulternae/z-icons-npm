import React from 'react';

export interface LanBirdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBirdRegular(props: LanBirdRegularProps): React.ReactElement;
export default LanBirdRegular;
