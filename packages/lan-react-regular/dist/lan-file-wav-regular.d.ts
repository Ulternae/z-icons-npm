import React from 'react';

export interface LanFileWavRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileWavRegular(props: LanFileWavRegularProps): React.ReactElement;
export default LanFileWavRegular;
