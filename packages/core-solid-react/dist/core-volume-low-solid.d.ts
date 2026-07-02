import React from 'react';

export interface CoreVolumeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeLowSolid(props: CoreVolumeLowSolidProps): React.ReactElement;
export default CoreVolumeLowSolid;
