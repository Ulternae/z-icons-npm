import React from 'react';

export interface LanTildeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTildeRegular(props: LanTildeRegularProps): React.ReactElement;
export default LanTildeRegular;
