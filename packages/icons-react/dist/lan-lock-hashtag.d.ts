import React from 'react';

export interface LanLockHashtagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockHashtag: React.FC<LanLockHashtagProps>;
export default LanLockHashtag;
