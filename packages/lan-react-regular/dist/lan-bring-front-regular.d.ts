import React from 'react';

export interface LanBringFrontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBringFrontRegular(props: LanBringFrontRegularProps): React.ReactElement;
export default LanBringFrontRegular;
