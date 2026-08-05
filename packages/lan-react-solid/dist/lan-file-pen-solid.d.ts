import React from 'react';

export interface LanFilePenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePenSolid(props: LanFilePenSolidProps): React.ReactElement;
export default LanFilePenSolid;
