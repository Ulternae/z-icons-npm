import React from 'react';

export interface LanMemoryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoryRegular(props: LanMemoryRegularProps): React.ReactElement;
export default LanMemoryRegular;
