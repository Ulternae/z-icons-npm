import React from 'react';

export interface LanSigmaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSigmaRegular(props: LanSigmaRegularProps): React.ReactElement;
export default LanSigmaRegular;
