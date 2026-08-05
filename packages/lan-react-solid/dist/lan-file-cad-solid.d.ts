import React from 'react';

export interface LanFileCadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCadSolid(props: LanFileCadSolidProps): React.ReactElement;
export default LanFileCadSolid;
