import React from 'react';

export interface LanBinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinRegular(props: LanBinRegularProps): React.ReactElement;
export default LanBinRegular;
