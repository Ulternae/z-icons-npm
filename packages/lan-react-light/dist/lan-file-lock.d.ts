import React from 'react';

export interface LanFileLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileLock(props: LanFileLockProps): React.ReactElement;
export default LanFileLock;
