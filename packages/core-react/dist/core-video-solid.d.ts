import React from 'react';

export interface CoreVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVideoSolid(props: CoreVideoSolidProps): React.ReactElement;
export default CoreVideoSolid;
