import React from 'react';

export interface NeoVolumeOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeOff(props: NeoVolumeOffProps): React.ReactElement;
export default NeoVolumeOff;
