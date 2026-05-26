import React from 'react';

export interface LanCodeCommitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeCommit: React.FC<LanCodeCommitProps>;
export default LanCodeCommit;
