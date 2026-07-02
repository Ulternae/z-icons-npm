import React from 'react';

export interface CoreVolumeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolume(props: CoreVolumeProps): React.ReactElement;
export default CoreVolume;
