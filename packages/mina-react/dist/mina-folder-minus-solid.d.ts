import React from 'react';

export interface MinaFolderMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderMinusSolid(props: MinaFolderMinusSolidProps): React.ReactElement;
export default MinaFolderMinusSolid;
