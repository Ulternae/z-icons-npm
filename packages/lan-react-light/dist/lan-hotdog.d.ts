import React from 'react';

export interface LanHotdogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotdog(props: LanHotdogProps): React.ReactElement;
export default LanHotdog;
