import React from 'react';

export interface LanFrostyHeadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrostyHead(props: LanFrostyHeadProps): React.ReactElement;
export default LanFrostyHead;
