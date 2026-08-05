import React from 'react';

export interface LanFileWavThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileWavThin(props: LanFileWavThinProps): React.ReactElement;
export default LanFileWavThin;
