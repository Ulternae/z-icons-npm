import React from 'react';

export interface LanOarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOars(props: LanOarsProps): React.ReactElement;
export default LanOars;
