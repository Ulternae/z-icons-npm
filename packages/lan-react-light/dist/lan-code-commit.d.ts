import React from 'react';

export interface LanCodeCommitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeCommit(props: LanCodeCommitProps): React.ReactElement;
export default LanCodeCommit;
