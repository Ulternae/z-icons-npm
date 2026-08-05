import React from 'react';

export interface LanUserHeadsetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHeadsetRegular(props: LanUserHeadsetRegularProps): React.ReactElement;
export default LanUserHeadsetRegular;
