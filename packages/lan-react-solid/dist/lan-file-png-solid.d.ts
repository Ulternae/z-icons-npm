import React from 'react';

export interface LanFilePngSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePngSolid(props: LanFilePngSolidProps): React.ReactElement;
export default LanFilePngSolid;
