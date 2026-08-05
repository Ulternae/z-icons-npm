import React from 'react';

export interface LanCucumberThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCucumberThin(props: LanCucumberThinProps): React.ReactElement;
export default LanCucumberThin;
