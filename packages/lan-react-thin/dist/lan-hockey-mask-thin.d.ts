import React from 'react';

export interface LanHockeyMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyMaskThin(props: LanHockeyMaskThinProps): React.ReactElement;
export default LanHockeyMaskThin;
