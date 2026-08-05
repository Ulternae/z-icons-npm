import React from 'react';

export interface LanBacteriaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacteriaRegular(props: LanBacteriaRegularProps): React.ReactElement;
export default LanBacteriaRegular;
