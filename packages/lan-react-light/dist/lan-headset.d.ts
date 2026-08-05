import React from 'react';

export interface LanHeadsetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadset(props: LanHeadsetProps): React.ReactElement;
export default LanHeadset;
