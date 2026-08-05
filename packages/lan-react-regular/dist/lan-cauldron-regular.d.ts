import React from 'react';

export interface LanCauldronRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCauldronRegular(props: LanCauldronRegularProps): React.ReactElement;
export default LanCauldronRegular;
