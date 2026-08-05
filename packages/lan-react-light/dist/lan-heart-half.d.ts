import React from 'react';

export interface LanHeartHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartHalf(props: LanHeartHalfProps): React.ReactElement;
export default LanHeartHalf;
