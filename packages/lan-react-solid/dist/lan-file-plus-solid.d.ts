import React from 'react';

export interface LanFilePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePlusSolid(props: LanFilePlusSolidProps): React.ReactElement;
export default LanFilePlusSolid;
