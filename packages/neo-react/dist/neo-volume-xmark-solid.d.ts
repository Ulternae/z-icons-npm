import React from 'react';

export interface NeoVolumeXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeXmarkSolid(props: NeoVolumeXmarkSolidProps): React.ReactElement;
export default NeoVolumeXmarkSolid;
