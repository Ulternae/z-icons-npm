import React from 'react';

export interface LanFileMp4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMp4Solid(props: LanFileMp4SolidProps): React.ReactElement;
export default LanFileMp4Solid;
