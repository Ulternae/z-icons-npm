import React from 'react';

export interface LanFileIcnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileIcnsRegular(props: LanFileIcnsRegularProps): React.ReactElement;
export default LanFileIcnsRegular;
