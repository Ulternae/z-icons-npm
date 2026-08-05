import React from 'react';

export interface LanSprinklerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprinklerRegular(props: LanSprinklerRegularProps): React.ReactElement;
export default LanSprinklerRegular;
