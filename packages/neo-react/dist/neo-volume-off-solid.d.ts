import React from 'react';

export interface NeoVolumeOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeOffSolid(props: NeoVolumeOffSolidProps): React.ReactElement;
export default NeoVolumeOffSolid;
