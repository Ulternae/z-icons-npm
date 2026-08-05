import React from 'react';

export interface LanFileMp4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMp4Regular(props: LanFileMp4RegularProps): React.ReactElement;
export default LanFileMp4Regular;
