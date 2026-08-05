import React from 'react';

export interface LanFileMp4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMp4(props: LanFileMp4Props): React.ReactElement;
export default LanFileMp4;
