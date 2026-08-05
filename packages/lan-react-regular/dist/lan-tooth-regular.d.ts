import React from 'react';

export interface LanToothRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToothRegular(props: LanToothRegularProps): React.ReactElement;
export default LanToothRegular;
