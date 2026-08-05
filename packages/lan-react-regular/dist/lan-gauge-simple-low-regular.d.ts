import React from 'react';

export interface LanGaugeSimpleLowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleLowRegular(props: LanGaugeSimpleLowRegularProps): React.ReactElement;
export default LanGaugeSimpleLowRegular;
