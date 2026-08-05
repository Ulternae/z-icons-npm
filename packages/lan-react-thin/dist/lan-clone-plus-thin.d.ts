import React from 'react';

export interface LanClonePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClonePlusThin(props: LanClonePlusThinProps): React.ReactElement;
export default LanClonePlusThin;
