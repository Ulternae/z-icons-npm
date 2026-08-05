import React from 'react';

export interface LanCloneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClone(props: LanCloneProps): React.ReactElement;
export default LanClone;
