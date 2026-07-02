import React from 'react';

export interface CoreVolumeOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeOff(props: CoreVolumeOffProps): React.ReactElement;
export default CoreVolumeOff;
