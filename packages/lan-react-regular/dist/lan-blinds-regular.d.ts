import React from 'react';

export interface LanBlindsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsRegular(props: LanBlindsRegularProps): React.ReactElement;
export default LanBlindsRegular;
