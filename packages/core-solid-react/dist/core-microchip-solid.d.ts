import React from 'react';

export interface CoreMicrochipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMicrochipSolid(props: CoreMicrochipSolidProps): React.ReactElement;
export default CoreMicrochipSolid;
