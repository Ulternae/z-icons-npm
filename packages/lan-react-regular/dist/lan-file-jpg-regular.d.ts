import React from 'react';

export interface LanFileJpgRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileJpgRegular(props: LanFileJpgRegularProps): React.ReactElement;
export default LanFileJpgRegular;
