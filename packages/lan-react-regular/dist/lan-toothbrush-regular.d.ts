import React from 'react';

export interface LanToothbrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToothbrushRegular(props: LanToothbrushRegularProps): React.ReactElement;
export default LanToothbrushRegular;
