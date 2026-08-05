import React from 'react';

export interface LanHorseshoeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseshoeRegular(props: LanHorseshoeRegularProps): React.ReactElement;
export default LanHorseshoeRegular;
