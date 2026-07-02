import React from 'react';

export interface CoreSignalGoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSignalGoodSolid(props: CoreSignalGoodSolidProps): React.ReactElement;
export default CoreSignalGoodSolid;
