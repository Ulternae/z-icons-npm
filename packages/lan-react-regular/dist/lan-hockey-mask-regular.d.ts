import React from 'react';

export interface LanHockeyMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyMaskRegular(props: LanHockeyMaskRegularProps): React.ReactElement;
export default LanHockeyMaskRegular;
