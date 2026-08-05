import React from 'react';

export interface LanTomatoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTomatoRegular(props: LanTomatoRegularProps): React.ReactElement;
export default LanTomatoRegular;
