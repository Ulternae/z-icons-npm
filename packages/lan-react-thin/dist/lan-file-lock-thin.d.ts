import React from 'react';

export interface LanFileLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileLockThin(props: LanFileLockThinProps): React.ReactElement;
export default LanFileLockThin;
