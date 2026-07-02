import React from 'react';

export interface CoreSignalWeakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSignalWeakSolid(props: CoreSignalWeakSolidProps): React.ReactElement;
export default CoreSignalWeakSolid;
