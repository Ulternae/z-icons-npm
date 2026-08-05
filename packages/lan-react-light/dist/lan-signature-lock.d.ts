import React from 'react';

export interface LanSignatureLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignatureLock(props: LanSignatureLockProps): React.ReactElement;
export default LanSignatureLock;
