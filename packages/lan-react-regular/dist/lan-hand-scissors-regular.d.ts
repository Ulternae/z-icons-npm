import React from 'react';

export interface LanHandScissorsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandScissorsRegular(props: LanHandScissorsRegularProps): React.ReactElement;
export default LanHandScissorsRegular;
