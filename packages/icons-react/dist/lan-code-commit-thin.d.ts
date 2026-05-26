import React from 'react';

export interface LanCodeCommitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeCommitThin: React.FC<LanCodeCommitThinProps>;
export default LanCodeCommitThin;
