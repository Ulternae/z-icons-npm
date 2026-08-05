import React from 'react';

export interface LanCloneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloneThin(props: LanCloneThinProps): React.ReactElement;
export default LanCloneThin;
