import React from 'react';

export interface LanEyeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeRegular(props: LanEyeRegularProps): React.ReactElement;
export default LanEyeRegular;
