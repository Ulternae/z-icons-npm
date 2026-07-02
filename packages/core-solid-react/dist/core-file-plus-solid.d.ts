import React from 'react';

export interface CoreFilePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilePlusSolid(props: CoreFilePlusSolidProps): React.ReactElement;
export default CoreFilePlusSolid;
