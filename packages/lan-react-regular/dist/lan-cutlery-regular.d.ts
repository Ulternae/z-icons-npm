import React from 'react';

export interface LanCutleryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCutleryRegular(props: LanCutleryRegularProps): React.ReactElement;
export default LanCutleryRegular;
