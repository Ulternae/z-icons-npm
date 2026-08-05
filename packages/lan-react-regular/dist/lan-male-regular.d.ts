import React from 'react';

export interface LanMaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaleRegular(props: LanMaleRegularProps): React.ReactElement;
export default LanMaleRegular;
