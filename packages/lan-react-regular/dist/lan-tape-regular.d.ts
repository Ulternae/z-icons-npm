import React from 'react';

export interface LanTapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTapeRegular(props: LanTapeRegularProps): React.ReactElement;
export default LanTapeRegular;
