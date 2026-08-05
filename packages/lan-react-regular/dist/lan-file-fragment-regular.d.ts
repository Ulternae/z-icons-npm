import React from 'react';

export interface LanFileFragmentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileFragmentRegular(props: LanFileFragmentRegularProps): React.ReactElement;
export default LanFileFragmentRegular;
