import React from 'react';

export interface LanFileDashedLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileDashedLineSolid(props: LanFileDashedLineSolidProps): React.ReactElement;
export default LanFileDashedLineSolid;
