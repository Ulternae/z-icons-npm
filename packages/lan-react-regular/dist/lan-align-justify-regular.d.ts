import React from 'react';

export interface LanAlignJustifyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignJustifyRegular(props: LanAlignJustifyRegularProps): React.ReactElement;
export default LanAlignJustifyRegular;
