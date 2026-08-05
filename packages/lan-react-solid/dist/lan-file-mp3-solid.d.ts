import React from 'react';

export interface LanFileMp3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMp3Solid(props: LanFileMp3SolidProps): React.ReactElement;
export default LanFileMp3Solid;
