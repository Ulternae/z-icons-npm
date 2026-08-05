import React from 'react';

export interface LanTennisBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTennisBallSolid(props: LanTennisBallSolidProps): React.ReactElement;
export default LanTennisBallSolid;
