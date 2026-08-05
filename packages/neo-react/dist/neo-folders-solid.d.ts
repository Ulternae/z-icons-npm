import React from 'react';

export interface NeoFoldersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFoldersSolid(props: NeoFoldersSolidProps): React.ReactElement;
export default NeoFoldersSolid;
