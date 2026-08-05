import React from 'react';

export interface LanDownUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownUpRegular(props: LanDownUpRegularProps): React.ReactElement;
export default LanDownUpRegular;
