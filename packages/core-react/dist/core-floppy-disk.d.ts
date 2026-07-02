import React from 'react';

export interface CoreFloppyDiskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFloppyDisk(props: CoreFloppyDiskProps): React.ReactElement;
export default CoreFloppyDisk;
