import React from 'react';

export interface LanFileMovProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMov(props: LanFileMovProps): React.ReactElement;
export default LanFileMov;
