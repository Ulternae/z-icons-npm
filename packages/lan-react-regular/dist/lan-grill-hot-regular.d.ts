import React from 'react';

export interface LanGrillHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillHotRegular(props: LanGrillHotRegularProps): React.ReactElement;
export default LanGrillHotRegular;
