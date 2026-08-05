import React from 'react';

export interface LanFilePowerpointSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePowerpointSolid(props: LanFilePowerpointSolidProps): React.ReactElement;
export default LanFilePowerpointSolid;
