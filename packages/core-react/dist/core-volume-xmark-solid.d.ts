import React from 'react';

export interface CoreVolumeXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeXmarkSolid(props: CoreVolumeXmarkSolidProps): React.ReactElement;
export default CoreVolumeXmarkSolid;
