import React from 'react';

export interface LanUserHeadsetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHeadset(props: LanUserHeadsetProps): React.ReactElement;
export default LanUserHeadset;
