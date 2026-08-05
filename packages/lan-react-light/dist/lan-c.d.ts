import React from 'react';

export interface LanCProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanC(props: LanCProps): React.ReactElement;
export default LanC;
