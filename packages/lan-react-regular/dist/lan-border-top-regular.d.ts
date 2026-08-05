import React from 'react';

export interface LanBorderTopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderTopRegular(props: LanBorderTopRegularProps): React.ReactElement;
export default LanBorderTopRegular;
