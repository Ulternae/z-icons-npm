import React from 'react';

export interface LanFishRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishRegular(props: LanFishRegularProps): React.ReactElement;
export default LanFishRegular;
