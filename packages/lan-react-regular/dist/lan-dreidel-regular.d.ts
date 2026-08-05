import React from 'react';

export interface LanDreidelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDreidelRegular(props: LanDreidelRegularProps): React.ReactElement;
export default LanDreidelRegular;
