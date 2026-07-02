import React from 'react';

export interface CoreVolumeOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeOffSolid(props: CoreVolumeOffSolidProps): React.ReactElement;
export default CoreVolumeOffSolid;
