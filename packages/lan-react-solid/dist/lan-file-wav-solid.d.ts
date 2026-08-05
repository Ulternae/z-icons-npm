import React from 'react';

export interface LanFileWavSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileWavSolid(props: LanFileWavSolidProps): React.ReactElement;
export default LanFileWavSolid;
