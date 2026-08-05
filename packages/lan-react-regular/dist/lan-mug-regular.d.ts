import React from 'react';

export interface LanMugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugRegular(props: LanMugRegularProps): React.ReactElement;
export default LanMugRegular;
