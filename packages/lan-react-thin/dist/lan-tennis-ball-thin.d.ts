import React from 'react';

export interface LanTennisBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTennisBallThin(props: LanTennisBallThinProps): React.ReactElement;
export default LanTennisBallThin;
