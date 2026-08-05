import React from 'react';

export interface LanGreaterThanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGreaterThanRegular(props: LanGreaterThanRegularProps): React.ReactElement;
export default LanGreaterThanRegular;
