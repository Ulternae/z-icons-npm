import React from 'react';

export interface LanHeadsetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadsetRegular(props: LanHeadsetRegularProps): React.ReactElement;
export default LanHeadsetRegular;
