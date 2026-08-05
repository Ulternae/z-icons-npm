import React from 'react';

export interface LanTennisBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTennisBallRegular(props: LanTennisBallRegularProps): React.ReactElement;
export default LanTennisBallRegular;
