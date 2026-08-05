import React from 'react';

export interface LanWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWrench(props: LanWrenchProps): React.ReactElement;
export default LanWrench;
