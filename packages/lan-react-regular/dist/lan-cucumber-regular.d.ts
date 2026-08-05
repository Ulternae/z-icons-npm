import React from 'react';

export interface LanCucumberRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCucumberRegular(props: LanCucumberRegularProps): React.ReactElement;
export default LanCucumberRegular;
