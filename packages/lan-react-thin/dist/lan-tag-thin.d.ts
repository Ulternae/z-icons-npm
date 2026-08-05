import React from 'react';

export interface LanTagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTagThin(props: LanTagThinProps): React.ReactElement;
export default LanTagThin;
