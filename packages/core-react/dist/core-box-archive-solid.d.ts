import React from 'react';

export interface CoreBoxArchiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoxArchiveSolid(props: CoreBoxArchiveSolidProps): React.ReactElement;
export default CoreBoxArchiveSolid;
