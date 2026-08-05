import React from 'react';

export interface LanKiwiFruitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiwiFruitRegular(props: LanKiwiFruitRegularProps): React.ReactElement;
export default LanKiwiFruitRegular;
