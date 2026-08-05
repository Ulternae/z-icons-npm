import React from 'react';

export interface LanFileCsvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCsvSolid(props: LanFileCsvSolidProps): React.ReactElement;
export default LanFileCsvSolid;
