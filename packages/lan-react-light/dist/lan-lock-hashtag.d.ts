import React from 'react';

export interface LanLockHashtagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockHashtag(props: LanLockHashtagProps): React.ReactElement;
export default LanLockHashtag;
