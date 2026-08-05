import React from 'react';

export interface LanBinBottlesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinBottlesRegular(props: LanBinBottlesRegularProps): React.ReactElement;
export default LanBinBottlesRegular;
