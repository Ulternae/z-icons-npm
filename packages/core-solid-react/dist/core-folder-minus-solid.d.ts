import React from 'react';

export interface CoreFolderMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolderMinusSolid(props: CoreFolderMinusSolidProps): React.ReactElement;
export default CoreFolderMinusSolid;
