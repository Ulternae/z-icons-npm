import React from 'react';

export interface LanFileWavProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileWav(props: LanFileWavProps): React.ReactElement;
export default LanFileWav;
