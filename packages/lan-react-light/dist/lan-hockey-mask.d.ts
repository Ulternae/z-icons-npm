import React from 'react';

export interface LanHockeyMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyMask(props: LanHockeyMaskProps): React.ReactElement;
export default LanHockeyMask;
