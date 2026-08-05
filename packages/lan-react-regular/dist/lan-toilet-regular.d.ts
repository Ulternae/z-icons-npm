import React from 'react';

export interface LanToiletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletRegular(props: LanToiletRegularProps): React.ReactElement;
export default LanToiletRegular;
