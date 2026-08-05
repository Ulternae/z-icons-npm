import React from 'react';

export interface LanFilterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilterRegular(props: LanFilterRegularProps): React.ReactElement;
export default LanFilterRegular;
