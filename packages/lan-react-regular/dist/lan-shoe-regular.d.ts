import React from 'react';

export interface LanShoeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShoeRegular(props: LanShoeRegularProps): React.ReactElement;
export default LanShoeRegular;
