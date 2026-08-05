import React from 'react';

export interface LanMemoryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemory(props: LanMemoryProps): React.ReactElement;
export default LanMemory;
