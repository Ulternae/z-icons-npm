import React from 'react';

export interface LanFishFinsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishFinsRegular(props: LanFishFinsRegularProps): React.ReactElement;
export default LanFishFinsRegular;
