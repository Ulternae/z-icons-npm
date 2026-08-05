import React from 'react';

export interface LanHandShakaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandShakaRegular(props: LanHandShakaRegularProps): React.ReactElement;
export default LanHandShakaRegular;
