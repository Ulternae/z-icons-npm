import React from 'react';

export interface CoreSignalFairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSignalFairSolid(props: CoreSignalFairSolidProps): React.ReactElement;
export default CoreSignalFairSolid;
