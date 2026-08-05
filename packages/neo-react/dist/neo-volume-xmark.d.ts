import React from 'react';

export interface NeoVolumeXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeXmark(props: NeoVolumeXmarkProps): React.ReactElement;
export default NeoVolumeXmark;
