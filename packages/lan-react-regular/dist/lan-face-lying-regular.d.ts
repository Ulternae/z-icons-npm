import React from 'react';

export interface LanFaceLyingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLyingRegular(props: LanFaceLyingRegularProps): React.ReactElement;
export default LanFaceLyingRegular;
