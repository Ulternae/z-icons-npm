import React from 'react';

export interface LanWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanW(props: LanWProps): React.ReactElement;
export default LanW;
