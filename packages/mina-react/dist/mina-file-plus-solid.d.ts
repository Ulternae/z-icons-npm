import React from 'react';

export interface MinaFilePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFilePlusSolid(props: MinaFilePlusSolidProps): React.ReactElement;
export default MinaFilePlusSolid;
