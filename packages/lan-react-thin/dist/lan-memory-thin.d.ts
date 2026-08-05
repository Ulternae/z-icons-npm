import React from 'react';

export interface LanMemoryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoryThin(props: LanMemoryThinProps): React.ReactElement;
export default LanMemoryThin;
