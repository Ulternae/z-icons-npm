import React from 'react';

export interface LanMugHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugHotRegular(props: LanMugHotRegularProps): React.ReactElement;
export default LanMugHotRegular;
