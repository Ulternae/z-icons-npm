import React from 'react';

export interface LanTennisBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTennisBall(props: LanTennisBallProps): React.ReactElement;
export default LanTennisBall;
