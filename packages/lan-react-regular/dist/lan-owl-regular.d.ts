import React from 'react';

export interface LanOwlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOwlRegular(props: LanOwlRegularProps): React.ReactElement;
export default LanOwlRegular;
