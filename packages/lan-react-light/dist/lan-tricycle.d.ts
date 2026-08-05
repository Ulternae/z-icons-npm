import React from 'react';

export interface LanTricycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTricycle(props: LanTricycleProps): React.ReactElement;
export default LanTricycle;
