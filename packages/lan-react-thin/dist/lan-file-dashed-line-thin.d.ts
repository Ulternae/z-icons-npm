import React from 'react';

export interface LanFileDashedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileDashedLineThin(props: LanFileDashedLineThinProps): React.ReactElement;
export default LanFileDashedLineThin;
