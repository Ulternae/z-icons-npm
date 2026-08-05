import React from 'react';

export interface LanFileMp3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMp3Regular(props: LanFileMp3RegularProps): React.ReactElement;
export default LanFileMp3Regular;
