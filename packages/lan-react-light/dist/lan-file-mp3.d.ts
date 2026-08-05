import React from 'react';

export interface LanFileMp3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMp3(props: LanFileMp3Props): React.ReactElement;
export default LanFileMp3;
