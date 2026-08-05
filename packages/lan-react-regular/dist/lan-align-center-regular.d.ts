import React from 'react';

export interface LanAlignCenterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignCenterRegular(props: LanAlignCenterRegularProps): React.ReactElement;
export default LanAlignCenterRegular;
