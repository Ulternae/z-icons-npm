import React from 'react';

export interface LanGaugeSimpleMinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMinRegular(props: LanGaugeSimpleMinRegularProps): React.ReactElement;
export default LanGaugeSimpleMinRegular;
