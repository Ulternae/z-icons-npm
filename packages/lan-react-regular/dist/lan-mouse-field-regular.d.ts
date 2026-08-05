import React from 'react';

export interface LanMouseFieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMouseFieldRegular(props: LanMouseFieldRegularProps): React.ReactElement;
export default LanMouseFieldRegular;
