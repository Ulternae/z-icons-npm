import React from 'react';

export interface LanHandFistThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandFistThin(props: LanHandFistThinProps): React.ReactElement;
export default LanHandFistThin;
