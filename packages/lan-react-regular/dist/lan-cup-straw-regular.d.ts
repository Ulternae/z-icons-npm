import React from 'react';

export interface LanCupStrawRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupStrawRegular(props: LanCupStrawRegularProps): React.ReactElement;
export default LanCupStrawRegular;
