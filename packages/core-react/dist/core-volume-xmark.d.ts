import React from 'react';

export interface CoreVolumeXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeXmark(props: CoreVolumeXmarkProps): React.ReactElement;
export default CoreVolumeXmark;
