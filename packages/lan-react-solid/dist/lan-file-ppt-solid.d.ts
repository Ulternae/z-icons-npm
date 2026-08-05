import React from 'react';

export interface LanFilePptSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePptSolid(props: LanFilePptSolidProps): React.ReactElement;
export default LanFilePptSolid;
