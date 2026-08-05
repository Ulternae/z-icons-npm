import React from 'react';

export interface NeoVolumeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolume(props: NeoVolumeProps): React.ReactElement;
export default NeoVolume;
