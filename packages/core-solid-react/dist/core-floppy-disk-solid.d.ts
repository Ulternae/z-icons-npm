import React from 'react';

export interface CoreFloppyDiskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFloppyDiskSolid(props: CoreFloppyDiskSolidProps): React.ReactElement;
export default CoreFloppyDiskSolid;
