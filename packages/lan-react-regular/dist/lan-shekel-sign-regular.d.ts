import React from 'react';

export interface LanShekelSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShekelSignRegular(props: LanShekelSignRegularProps): React.ReactElement;
export default LanShekelSignRegular;
