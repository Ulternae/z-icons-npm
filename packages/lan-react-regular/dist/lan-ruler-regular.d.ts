import React from 'react';

export interface LanRulerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerRegular(props: LanRulerRegularProps): React.ReactElement;
export default LanRulerRegular;
