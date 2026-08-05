import React from 'react';

export interface LanCucumberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCucumber(props: LanCucumberProps): React.ReactElement;
export default LanCucumber;
