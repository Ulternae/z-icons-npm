import React from 'react';

export interface LanFilePdfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePdfSolid(props: LanFilePdfSolidProps): React.ReactElement;
export default LanFilePdfSolid;
